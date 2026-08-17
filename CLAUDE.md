# 웹 프로젝트 공통 가이드 (Vite/React/Tailwind + GitHub Pages)

이 문서는 특정 프로젝트에 종속되지 않은 **범용 가이드**입니다. Vite + React +
Tailwind로 SPA를 만들고 GitHub Pages(GitHub Actions)로 배포하는 모든 프로젝트에
그대로 재사용할 수 있도록 이번 작업에서 얻은 패턴/함정을 정리했습니다. 새 프로젝트를
시작할 때 이 파일을 프로젝트 루트의 `CLAUDE.md`로 복사해서 시작하세요.

## 1. 프로젝트 기본 구성

- **스택**: Vite + React + Tailwind CSS + react-router-dom
- **`vite.config.js`는 `base: './'` (상대경로)로 설정**한다. GitHub Pages는
  저장소 이름이 URL 경로에 들어가므로(`https://<user>.github.io/<repo>/`),
  절대경로(`base: '/repo-name/'`)로 하드코딩하면 저장소를 옮기거나 이름을
  바꿀 때마다 깨진다. 상대경로면 어디로 옮겨도 그대로 동작한다.
- Tailwind는 `tailwind.config.js`의 `theme.extend`에 브랜드 컬러/폰트를
  토큰화해서 정의하고(`navy`, `teal` 같은 이름), 컴포넌트에서는 항상 이
  토큰만 사용한다. 임의의 hex 값을 인라인으로 쓰지 않는다.

## 2. GitHub Pages 배포 — 반드시 겪는 함정들

### 2.1 Pages 소스를 "GitHub Actions"로 반드시 수동 설정해야 한다
`.github/workflows/deploy.yml`이 저장소에 있어도, 저장소 **Settings → Pages →
Build and deployment → Source**를 "GitHub Actions"로 설정해두지 않으면
배포가 안 되거나, GitHub이 자동으로 **Jekyll 기본 워크플로**
(`jekyll-gh-pages.yml`)를 대신 추가해서 실행해버릴 수 있다. 이 Jekyll
워크플로는 React 빌드 결과가 아니라 저장소 루트를 그대로 Jekyll로 빌드하므로
반드시 삭제하고, 우리 앱을 `npm run build`로 빌드해서 `dist/`를 배포하는
워크플로만 남겨야 한다.

권장 `deploy.yml` 골격:
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

### 2.2 라우팅에는 `HashRouter`를 쓴다 (`BrowserRouter` 아님)
GitHub Pages는 정적 호스팅이라 서버 쪽 URL 재작성(rewrite)이 없다.
`BrowserRouter`로 `/task-workflow` 같은 경로를 쓰면, 그 경로에서 **새로고침하거나
직접 링크로 들어오면 404**가 난다(서버에 그 경로의 실제 파일이 없으므로).
`HashRouter`를 쓰면 라우트가 `/#/task-workflow`처럼 URL 프래그먼트에 들어가서
서버로 전달되지 않으므로, 어떤 경로에서 새로고침해도 항상 `index.html`만
요청되고 정상 동작한다. 정적 호스팅(GitHub Pages, S3 정적 사이트 등)에
배포하는 SPA는 기본값을 `HashRouter`로 시작하는 것을 권장한다. (서버 rewrite를
직접 설정할 수 있는 호스팅이라면 `BrowserRouter` + 404→index.html 리다이렉트
규칙을 대신 써도 된다.)

### 2.3 저장소를 다른 계정/조직으로 옮길 때
- **Transfer(소유권 이전)**: 히스토리·설정 대부분 유지되지만, URL은
  `https://<새 계정>.github.io/<repo>/`로 바뀐다. 이전 후 Pages Source
  설정이 유지되는지 한 번 확인.
- **Fork/코드만 복사해서 새 저장소 생성**: 완전히 새 저장소 취급.
  - Settings → Pages → Source를 "GitHub Actions"로 **수동 설정 필수**.
  - Settings → Actions에서 Actions가 활성화되어 있는지 확인 (조직 계정은
    기본 비활성일 수 있음).
  - 이슈/PR 이력은 넘어가지 않는다.

## 3. Git / PR 워크플로 관례

- 지정된 개발 브랜치 하나에서 계속 작업하고, 완료될 때마다 PR을 만들어
  `main`으로 머지한다.
- **PR이 머지된 뒤 같은 브랜치에서 후속 작업을 시작할 때는, 반드시 브랜치를
  최신 `main`에서 다시 만든다**(머지된 히스토리를 재사용하지 않음):
  ```bash
  git fetch origin main
  git stash push -u   # 작업 중이던 변경사항이 있으면
  git checkout -B <branch> origin/main
  git stash pop
  # 커밋 후
  git push --force-with-lease -u origin <branch>
  ```
  이미 머지되어 `main`에 들어간 커밋을 브랜치에 다시 쌓아두면 diff가
  지저분해지고, `force-with-lease`는 "머지된 이력만 덮어쓰는" 안전한 경우에만
  쓴다.
- 배포 워크플로가 `main` push에 물려 있다면, PR을 머지한 뒤에는 항상
  Actions 탭(또는 API)으로 실제 배포 run이 `success`인지 확인하고 알린다.
  머지=배포 완료가 아니다.

## 4. UI 패턴: 간트 차트 / 대량 리스트

- **행이 많아질수록(수십~수백 개) 스크롤 컨테이너를 반드시 높이 제한한다.**
  헤더 + 전체 행을 하나의 큰 `overflow-x-auto` 블록으로만 감싸면, 가로
  스크롤바가 맨 아래(모든 행을 지나야 하는 위치)에 생겨 사실상 못 찾는다.
  `max-height` + `overflow-auto`로 뷰포트 내에 박스를 고정하고, 날짜/헤더
  행에는 `sticky top-0`, 라벨 컬럼에는 `sticky left-0`을 줘서 스크롤 중에도
  기준이 보이게 한다.
- 트랙패드/맥 등 스크롤바를 기본적으로 숨기는 환경에서는 스크롤 가능 여부
  자체를 사용자가 못 알아챌 수 있다. `scrollbar-width`/`::-webkit-scrollbar`로
  얇은 스크롤바를 항상 보이게 하는 유틸 클래스를 하나 만들어 재사용한다.
- 확대/축소(막대 폭 조절)가 필요한 화면이 두 개 이상이면, 줌 버튼 UI와
  줌 레벨 배열을 별도 공용 컴포넌트로 분리해서 페이지마다 재구현하지 않는다.
- 선후행(의존) 관계를 시각화할 때는 SVG `<path>` + `marker-end` 화살표로
  카드/막대 사이를 곡선으로 잇는 방식이 깔끔하다. 좌표는 각 행의
  `top`/`center Y`, 각 막대의 `x`/`width`에서 그대로 계산하면 되고, 별도
  레이아웃 라이브러리가 필요 없다.

## 5. 더미/목 데이터 생성 전략

- 데이터 양이 많이 필요할 때(수십~수백 건)는 손으로 쓰지 말고 **작은 Node
  스크립트로 결정론적으로 생성**한다. `Math.random()` 대신 시드 기반 의사난수
  (`Math.sin(seed) ...`)를 쓰면 매번 같은 결과가 나와 리뷰/디버깅이 쉽다.
- 생성 직후 반드시 다음을 스크립트로 검증한다:
  - 총 개수, 그룹별(담당자별 등) 개수 분포
  - ID 유일성
  - 참조 무결성(선행/후행 ID가 실제로 존재하는지) — 끊어진 참조가 있으면
    화면에서 조용히 깨지므로 반드시 0건 확인 후 파일에 반영한다.
- 생성 로직(며칠짜리 프로젝트인지, 인원수, 항목 수)은 파일 상단 주석에
  한 줄로 요약해 남겨서, 다음에 규모를 바꿀 때 그 스크립트만 다시 돌리면
  되게 한다.

## 6. 헤드리스 브라우저로 실제 동작 검증

UI를 바꿨다면 빌드/타입체크만으로 끝내지 말고, 반드시 실제로 띄워서
확인한다.

- 이 실행 환경에는 Playwright가 전역에 설치되어 있고
  (`/opt/node22/lib/node_modules/playwright`), Chromium도 미리 받아져 있다
  (`/opt/pw-browsers/chromium-*/chrome-linux/chrome`). 프로젝트에
  `playwright`가 의존성으로 없어도 `node_modules/playwright`를 그
  경로로 심볼릭 링크해서 바로 쓸 수 있다. `playwright install`은 다시
  받지 않는다.
- 검증 스크립트 패턴:
  1. `npm run dev`를 백그라운드로 띄우고 포트가 뜰 때까지 폴링.
  2. Playwright로 `chromium.launch({ executablePath: ..., args: ['--no-sandbox'] })`.
  3. `HashRouter`를 쓰는 프로젝트라면 **`page.goto`할 때 반드시 `/#/route`
     형태**로 이동한다(`/route`로만 이동하면 그냥 홈으로 떨어져서, 원하는
     페이지를 테스트하는 줄 알았는데 실제로는 홈을 테스트하고 있었다는 걸
     못 알아채는 사고가 난다).
  4. `console`/`pageerror` 리스너로 실제 런타임 에러를 잡는다. 폰트 CDN
     요청 실패(`ERR_CONNECTION_RESET`, `404`) 같은 네트워크 격리 환경의
     잡음은 무시해도 되지만, 그 외 에러는 반드시 원인을 확인한다.
  5. 스크린샷을 남기고 **실제로 읽어서** 확인한다. 빌드 성공과 화면이
     의도대로 보이는 것은 다른 문제다.
  6. 검증이 끝나면 `dist/`는 지우고, dev 서버는 포트로 찾아 kill한다
     (`lsof -ti:PORT -sTCP:LISTEN | xargs -r kill`).

## 7. 요청 처리 시 유의사항

- "화면에 안 보인다"는 리포트를 받으면 코드가 맞는지 다시 보기 전에
  **배포 파이프라인 상태부터 확인**한다 — 실제로 자주 원인은: (a) PR이 아직
  안 머지됨, (b) 배포 워크플로가 실패/아직 실행 중, (c) 브라우저 캐시.
  이 순서로 먼저 배제한다.
- PR 생성·머지는 사용자가 명시적으로 요청했을 때만 수행한다. 머지 후에는
  배포 워크플로가 성공했는지까지 확인하고 나서 "완료"라고 보고한다.
- 데이터 규모(인원 수, 기간, 총 항목 수)처럼 숫자로 명확히 표현되는 요구는
  그 숫자가 정확히 맞아떨어지는 구조(예: 인원 × 기간 = 총 항목 수)로
  데이터를 설계하면 검증하기도, 나중에 규모를 바꾸기도 쉽다.
