---
name: vite-github-pages-deploy
description: Vite + React(+ Tailwind, react-router 등) SPA를 GitHub Pages(GitHub Actions 방식)로 배포하거나, 배포 후 "화면이 안 바뀐다/404가 뜬다"를 진단하거나, 저장소를 다른 GitHub 계정으로 옮길 때 사용한다. "GitHub Pages 배포해줘", "배포 파이프라인 만들어줘", "새로고침하면 404", "사이트가 반영이 안 됨", "저장소를 다른 계정으로 옮기면 배포되나" 같은 요청이 오면 이 스킬을 반드시 확인한다. 특정 프로젝트에 종속되지 않은 범용 절차이므로, 프레임워크가 Vite+React 계열이고 정적 호스팅(GitHub Pages)을 쓰는 모든 저장소에서 트리거되어야 한다.
---

# Vite/React → GitHub Pages 배포

정적 호스팅(GitHub Pages)에는 서버가 없다는 사실 하나에서 이 스킬의 모든 규칙이
파생된다. 아래 순서대로 확인하면 실수 없이 배포할 수 있다.

## 1. 빌드 설정: 상대경로

`vite.config.js`의 `base`를 반드시 상대경로로 둔다.

```js
export default defineConfig({
  plugins: [react()],
  base: './',
});
```

이유: GitHub Pages URL은 `https://<user>.github.io/<repo>/`처럼 저장소 이름을
경로에 포함한다. `base: '/repo-name/'`으로 하드코딩하면 저장소 이름이나
소유자가 바뀔 때마다(포크, 이전, 이름 변경) 깨진다. 상대경로면 어디로
옮겨도 그대로 동작하므로 처음부터 이렇게 시작한다.

## 2. 라우팅: `HashRouter`를 쓴다

`react-router-dom`을 쓰는 프로젝트라면 `BrowserRouter`가 아니라
**`HashRouter`**를 쓴다.

```jsx
import { HashRouter, Routes, Route } from "react-router-dom";
```

이유: GitHub Pages는 서버 쪽 URL rewrite가 없는 순수 정적 호스팅이다.
`BrowserRouter`가 만드는 `/task-workflow` 같은 경로는 브라우저 안에서
클릭으로 이동할 땐 멀쩡하지만, **그 경로에서 새로고침하거나 링크를 직접
열면 서버에 그 파일이 실제로 없어서 404**가 난다. `HashRouter`는 경로를
URL 프래그먼트(`/#/task-workflow`)에 담기 때문에 서버로 전혀 전달되지
않고, 매번 `index.html`만 요청되므로 어떤 화면에서 새로고침해도 항상
정상 동작한다.

이미 `BrowserRouter`로 만들어진 프로젝트에서 "새로고침하면 404" 문제를
진단하라는 요청을 받으면, 십중팔구 이게 원인이다. `HashRouter`로 바꾸는
것 외의 대안(서버 rewrite 규칙 추가)은 GitHub Pages에서는 불가능하다.

## 3. 배포 워크플로

`.github/workflows/deploy.yml`을 아래 골격으로 만든다. `npm run build`로
`dist/`를 만들고, 그걸 그대로 Pages에 올리는 것 외에는 아무것도 하지
않는다.

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with: { path: ./dist }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment: { name: github-pages, url: ${{ steps.deployment.outputs.page_url }} }
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

## 4. Pages를 "GitHub Actions" 소스로 반드시 수동 설정

**워크플로 파일이 저장소에 있는 것만으로는 배포되지 않는다.** 저장소
Settings → Pages → Build and deployment → Source를 "GitHub Actions"로
설정해야 한다.

이 설정이 아직 안 된 저장소에서 사람이 GitHub UI로 "Pages 켜기"를 처음
누르면, GitHub이 종종 **자기 마음대로 Jekyll용 기본 워크플로**
(`.github/workflows/jekyll-gh-pages.yml`)를 만들어서 main에 커밋하고
실행해버린다. 이 워크플로는 React 빌드가 아니라 저장소 루트를 Jekyll로
그대로 빌드하므로, 우리가 만든 `deploy.yml`과 동시에 존재하면 서로
충돌하거나(같은 `pages` concurrency 그룹) 엉뚱한 결과물이 배포된다.

작업 순서:
1. 배포 요청을 받으면 저장소에 `jekyll-gh-pages.yml` 같은 다른 Pages
   워크플로가 이미 있는지 먼저 확인한다(`.github/workflows/` 목록 조회).
2. 있으면 삭제하고, 우리 `deploy.yml`만 남긴다.
3. push해서 배포 워크플로가 실제로 `success`로 끝나는지 Actions
   API/탭으로 확인한다.

## 5. "화면이 안 바뀐다"는 리포트를 받았을 때 진단 순서

코드를 다시 뜯어보기 전에, 이 순서로 먼저 배제한다. 실제로 원인의
대부분은 코드가 아니라 파이프라인/캐시에 있다.

1. **PR이 머지됐는가?** — 배포는 `main` push에 물려 있으므로, PR이 open
   상태면 아무리 코드가 맞아도 배포된 사이트는 그대로다.
2. **배포 워크플로 run이 성공했는가?** — 머지 == 배포 완료가 아니다.
   머지 직후 트리거된 워크플로 run을 Actions API로 찾아서 `status`/
   `conclusion`을 확인한다. 실패했다면 로그를 읽어 원인을 고친다.
3. **브라우저 캐시** — 위 둘 다 정상이면 강력 새로고침
   (Ctrl+Shift+R / Cmd+Shift+R)을 안내한다.

## 6. 저장소를 다른 GitHub 계정/조직으로 옮길 때

- **GitHub의 "Transfer ownership" 기능**: 저장소·이력·설정이 대체로
  유지된다. URL만 `https://<새 계정>.github.io/<repo>/`로 바뀐다.
  이전 후 Pages Source 설정이 유지되는지 한 번 확인 권장.
- **Fork 하거나 코드만 복사해 새 저장소 생성**: 완전히 새 저장소로
  취급해야 한다.
  - Settings → Pages → Source를 "GitHub Actions"로 **다시 수동
    설정**해야 한다(자동으로 안 켜짐).
  - Fork인 경우 GitHub Actions가 기본적으로 꺼져 있으므로 Settings →
    Actions에서 켜야 워크플로가 실행된다.
  - 이슈/PR 이력은 넘어가지 않는다.
  - (1번 항목대로 `base: './'`를 이미 썼다면) 빌드 설정은 손댈 필요 없다.

## 7. 배포 후 실제 동작을 헤드리스 브라우저로 검증

빌드 성공과 "화면이 의도대로 보이는 것"은 다른 문제다. UI를 바꿨다면
반드시 실제로 띄워서 스크린샷을 찍고 읽어본다.

- 이 실행 환경에는 Playwright가 전역에 설치돼 있고
  (`/opt/node22/lib/node_modules/playwright`), Chromium도 미리 받아져
  있다(`/opt/pw-browsers/chromium-*/chrome-linux/chrome`).
  `playwright install`은 다시 실행하지 않는다. 프로젝트에 `playwright`가
  의존성으로 없으면 그냥 심볼릭 링크해서 쓴다:
  ```bash
  mkdir -p node_modules && ln -sfn /opt/node22/lib/node_modules/playwright node_modules/playwright
  ```
- **`HashRouter`를 쓰는 프로젝트를 테스트할 때는 반드시
  `http://localhost:PORT/#/route` 형태로 이동**한다. `/route`로만
  이동하면 그냥 홈(`/`)으로 떨어지는데, 겉으로는 페이지가 정상적으로
  뜨는 것처럼 보여서 실제로는 엉뚱한 화면을 테스트하고 있었다는 걸
  놓치기 쉽다.
- `console`/`pageerror` 리스너로 런타임 에러를 잡는다. 폰트 CDN 요청
  실패(`ERR_CONNECTION_RESET`, `404`) 같은 네트워크 격리 환경의 잡음은
  무시해도 되지만, 그 외 에러는 반드시 원인을 확인한다.
- 검증이 끝나면 `dist/`는 지우고, dev 서버는 포트로 찾아서 종료한다:
  `lsof -ti:PORT -sTCP:LISTEN | xargs -r kill`.

## 8. Git/PR 작업 관례

- 지정된 브랜치 하나에서 계속 작업하고, 매 변경마다 PR을 만들어 `main`에
  머지한다.
- **직전 PR이 이미 머지된 상태에서 같은 브랜치로 후속 작업을 시작할
  때는, 그 브랜치를 최신 `main`에서 다시 만든다.** 이미 머지되어 `main`에
  들어간 커밋을 브랜치에 그대로 얹어두면 diff가 지저분해지고 다음 PR이
  이전 PR의 변경사항까지 다시 포함해버린다.
  ```bash
  git fetch origin main
  git stash push -u          # 진행 중이던 변경사항이 있으면
  git checkout -B <branch> origin/main
  git stash pop
  # 커밋 후
  git push --force-with-lease -u origin <branch>
  ```
  `force-with-lease`는 "이미 머지되어 사라져도 되는 이력만 덮어쓰는"
  이런 경우에 한해서 쓴다. 아직 머지되지 않은 커밋이 브랜치에 남아있다면
  버리지 말고 새 base 위로 rebase해서 보존한다.
