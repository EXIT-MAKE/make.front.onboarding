# 🧑‍💻 **MAKE ONBOARDING for Front-end**

메이크 프론트 엔드 신규 입사자 교육을 위한 레포지토리입니다.

<br /><br />

## 🗃 우리 서비스는?

<br />

### **trymake.co** ( _Server Side Rendering_ )

```
┌───────────────── EC2 ────────────────┐
│ ┌── Docker Container (FE server) ──┐ │
│ │       ┌── trymake.co ──┐         │ │
│ │       │     NextJS     │         │ │
│ │       │  render here!  │         │ │
│ │       └───────┬────────┘         │ │
│ └────────────── │ ─────────────────┘ │
└──────────────── │ ───────────────────┘
                  │                          Browser
                  │                         ┌────────────────────────┐
                  │ ┌────────┐              ├────────────────────────┤
                  │ │        └─┐            │                        │
                  └─┤   page   ├───────────>│                        │
                    │ ( HTML ) │            │                        │
                    │          │            │                        │
                    └──────────┘            └────────────────────────┘
```

<br />

### **make.education** ( _Client Side Rendering_ )

> make.block-editor, make.admin 또한 CSR로 동작합니다.

```

                                                    Browser
┌─────── Firebase ────────┐                         ┌────────────────────────┐
│ ┌── make.eduacation ──┐ │                         ├────────────────────────┤
│ │        React        ├───── JS + static asset ──>│                        │
│ │  build result => JS │ │                         │      render here!      │
│ └─────────────────────┘ │                         │                        │
└─────────────────────────┘                         │                        │
                                                    └────────────────────────┘

```

<br /><br />

## ⚽️ **Mission 1** : _Todo List를 만들어 보자_

<br />

### _목표_

```
 Local Storage를 이용하여 CRUD가 가능한 Todo List 웹 앱을 구현합니다.
```

### _목적_

```
 - React 앱 생성 및 마크업 개발, 기본적인 CRUD에 대한 이해
 - Local Storage의 동작 방식 이해 및 활용
 - CSR의 정적호스팅 이해 및 build & deploy 경험
```

### _상세 요구사항_

- Front-end 웹 앱을 구현합니다.
  - React를 사용하여 구현합니다.
    > 클래스 형이 아닌 **함수형**을 사용합니다.
  - TypeScript를 사용하여 구현합니다.
  - 스타일( CSS )을 생각하지 않고 개발합니다. ( _추후 미션에 추가_ )
- React 앱을 build 하고 deploy 합니다.
  - 정적 호스팅은 S3를 사용합니다.
  - S3 버킷은 **make-frontend-onboarding**를 사용합니다.
    > 버킷 내부에 본인 닉네임으로 directory를 만들고, 그 안에 배포하도록 합니다.
  - 그 외 기타 설정은 기본값을 사용하되 필요에 따라 변경할 수 있습니다.
- CRUD는 Local Storage를 사용합니다.

### _선수지식_

- React (TypeScript)
- S3
- Local Storage

<br /><br />

## 🏀️ **Mission 2** : _CRUD에 Promise객체를 통한 비동기처리를 추가해보자_

<br />

### _목표_

```
 위에서 개발한 Todo List의 CRUD를 처리 시, 데이터를 Promise객체로 변경하고, 비동기 및 에러 핸들링을 추가합니다.
```

### _목적_

```
 - Promise 객체 및 비동기 처리에 대한 이해
 - Error 핸들링에 대한 이해
```

### _상세 요구사항_

### _선수지식_

- Promise
- async, await or then

<br /><br />

## ⚾ **Mission 3** : _style을 추가해보자_

<br />

### _목표_

```
 figma의 디자인을 그대로 Todo List에 적용해보자.
```

### _목적_

```
 - styled-components에 대한 이해 및 활용
 - 디자이너와의 협업 경험
```

### _상세 요구사항_

### _선수지식_

- CSS in JS ( styled-components, emotion)
- Figma

<br /><br />

## 🏐 **Mission 4** : _useState를 제거해보자_

<br />

### _목표_

```
 useState를 통해 관리하던 state 변수들을 모두 전역 state으로 처리하도록 변경합니다.
```

### _목적_

```
 - Flux구조에 대한 이해 및 redux 활용
```

### _상세 요구사항_

### _선수지식_

- Flux ( redux )

<br /><br />
