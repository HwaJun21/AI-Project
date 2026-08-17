# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.


1. CLAUDE.md — 이번 세션에서 쌓인 지식을 특정 프로젝트에 종속되지 않게 정리한 범용 가이드입니다. Vite/Tailwind 기본 설정, GitHub Pages 배포 함정(Jekyll 기본 워크플로 충돌, HashRouter 필요성), PR/브랜치 관례(머지된 브랜치 재시작), Gantt/대량 리스트 UI 패턴(스크롤 영역 바운딩, 줌 컨트롤), 목 데이터 생성·검증 전략, 헤드리스 브라우저 검증 방법을 담았습니다.

2. .claude/skills/vite-github-pages-deploy/SKILL.md — 명시적으로 요청하신 "스킬"입니다. skill-creator를 이용해 정식 형식(frontmatter + 트리거 문구 포함)으로 만들었고, "GitHub Pages 배포해줘", "새로고침하면 404", "저장소 옮기면 배포되나" 같은 요청에서 자동으로 트리거되도록 설계했습니다. YAML frontmatter 파싱 검증도 마쳤습니다.

참고: skill-creator가 원래 제공하는 절차는 테스트 케이스를 만들어 서브에이전트로 실행하고, 결과를 벤치마크 뷰어로 비교 검토하는 훨씬 무거운 반복 개선 루프인데, 지금은 이번 대화 맥락에서 바로 뽑아낼 수 있는 내용이라 그 루프 없이 바로 작성했습니다. 나중에 실제로 몇 개 요청을 던져보고 트리거/내용 품질을 정식으로 검증하고 싶으시면 말씀해 주세요.
