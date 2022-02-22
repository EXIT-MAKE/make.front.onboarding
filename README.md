# 🧑‍💻 **MAKE ONBOARDING for Front-end**

메이크 프론트 엔드 신규 입사자 교육을 위한 레포지토리입니다.

<br /><br />

## 🗃 **우리 서비스는?**

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

## **Version Info**

#### `node: v16.13.1`

#### `npm: v8.1.2`

#### `react: v17.0.2`

<br/><br/>

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
```

### _상세 요구사항_

- Functional Requirements
  - input 태그를 활용하여 입력받은 '할 일'을 생성해서 Local Storage에 **_저장할_** 수 있어야 합니다.
  - Local Storage에 접근하여 저장된 '할 일' 목록을 **_가져와 모아볼_** 수 있어야 합니다.
  - Local Storage에 접근하여 '할 일' 목록 중 특정 '할 일'을 **_수정할_** 수 있어야 합니다.
  - Local Storage에 접근하여 '할 일' 목록 중 특정 '할 일'을 **_삭제할_** 수 있어야 합니다.
  - '할 일' 목록은 등록한 순서대로 출력되어야 합니다.
  - 모든 변수 및 함수들은 Type 지정이 되어야 합니다.
- Front-end 웹 앱 구현
  - React를 사용하여 구현합니다.
    > 클래스 형이 아닌 **함수형**을 사용합니다. ( _useEffect, useState 활용_ )
  - 스타일( CSS )을 생각하지 않고 개발합니다. ( _추후 미션에 추가_ )

### _선수지식_

- React (TypeScript)
- React hooks
- Local Storage

<br /><br />

## 🏀️ **Mission 2** : _CRUD에 Promise객체를 통한 비동기처리 및 Error Handling을 추가해보자_

<br />

### _목표_

```
 위에서 개발한 Todo List의 CRUD 처리 시 데이터를 Promise객체로 변경하고, Error Handling을을 추가합니다.
```

### _목적_

```
 - Promise 객체 및 비동기 처리에 대한 이해
 - Error 핸들링에 대한 이해
 - 캡슐화, 추상화에 대한 이해
```

### _상세 요구사항_

- Functional Requirements
  - `type.ts` 파일을 생성하고 내부에 사용하는 `type`을 정의합니다.
  - `api.ts` 파일을 생성하고 내부에 데이터 CRUD 함수를 `Promise`객체로 정의합니다.
    - `Promise`객체로 정의한 함수를 사용하여 코드를 리팩토링합니다.
    - `async - await`문법을 사용합니다.
    - `try - catch`문법으로 에러 핸들링을 추가합니다.
- 반복코드를 최대한 줄이는 것을 목표로 합니다.

### _선수지식_

- Promise, resolve, reject
- async-await
- try-catch
- 캡슐화, 추상화

<br /><br />

## ⚾ **Mission 3** : _style을 추가해보자_

<br />

### _목표_

```
 figma의 디자인을 그대로 Todo List에 적용해보자.
```

### _목적_

```
 - component에 대한 이해 및 활용
 - Presenter - Container Pattern에 대한 이해
 - styled-components에 대한 이해 및 활용
 - 디자이너와의 협업
 - 개발자로써 디자인 툴인 figma의 사용법 익히기
```

### _상세 요구사항_

- Functional Requirements
  - [figma 링크](https://www.figma.com/file/vlT0bAgj6vIqU0sTvixqV4/%EC%9B%B9%ED%8C%80-%EC%98%A8%EB%B3%B4%EB%94%A9?node-id=0%3A1)에 접속하여 디자인에 맞도록 TodoList를 수정합니다.
    - 만약 권한이 없을 경우 @dudodev 에게 문의하시면 됩니다.
  - `styled-components`를 사용하여 스타일을 작성합니다.
  - 구현 시 `Presenter - Container Pattern`을 적용합니다.
    - `SomePage.presenter.tsx`( _Presenter_ )에는 Markup 개발 내용이 들어갑니다.
    - `SomePage.style.ts`에는 `SomePage.presenter.tsx`에서 사용될 컴포넌트들의 스타일을 정의합니다.
    - `SomePage.tsx`( _Container_ )에는 Markup 개발을 제외한 함수 로직이 작성됩니다.
    - [참고 링크1](https://velog.io/@holim0/React-Design-Pattern)
    - [참고 링크2](https://from2020.tistory.com/18)
    - **_파일명 같은 경우 strict하게 지키지 않아도 됩니다._**
      > 중요한 것은 `Presenter - Container Pattern`을 이해하는 것입니다! :)
  - `share component`를 사용해서 재사용성을 높입니다.
    - `share component`는 `src/components/share/`에 작성합니다.
    - 디자인에 있는 `Header`를 포함한 `Layout component`는 필수사항입니다.
    - 나머지는 **_재사용성 및 유지보수성 증가_** 라는 목적에 맞게 자유롭게 `component`화 하도록 합니다.
  - 요구사항 이외의 directory 구조는 본인에게 편한 방식으로 만들어도 괜찮습니다 :)

### _선수지식_

- React Component
- React Design Pattern
- CSS in JS ( styled-components )
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
 - Flux구조에 대한 이해 및 redux 활용법 익히기
```

### _상세 요구사항_

- Functional Requirements
  - 페이지에서 관리하던 변수들을 모두 전역으로 관리합니다.
    - `redux`를 사용하여 전역변수를 관리하도록 변경합니다.
  - `redux` 구현 시 `Ducks Pattern`을 적용합니다. [What is the Ducks Pattern](https://dinn.github.io/web/redux-ducks-pattern/)
    - `/src/store`에 `configStore.ts`를 통해 `store`를 정의합니다.
    - `/src/store/module`안에 `todo.ts`, `user.ts`를 `Ducks Pattern`에 따라서 작성합니다.
      - `todo.ts` : TodoList 관리
      - `user.ts` : 유저(자기 자신) 정보 관리
  - `Flux` 구조에 대해서 이해할 수 있도록 합니다.
    - [참고 링크1](https://velog.io/@dksgyals1/Flux-%EA%B7%B8%EB%A6%AC%EA%B3%A0-Redux%EC%99%80-Mobx)
  - 요구사항 이외의 directory 구조는 본인에게 편한 방식으로 만들어도 괜찮습니다 :)

### _선수지식_

- Flux ( redux )
- Ducks Pattern

<br /><br />

## 🎱️ **Bonus Mission** : _만든 TodoList를 배포해보자_

### _목표_

```
 실제 웹사이트를 배포하여 외부에서 접근 가능하도록 하고, 배포 자동화를 구축합니다.
```

### _목적_

```
 - 웹사이트 배포 경험
 - CSR의 정적호스팅 이해 및 build & deploy 경험
 - Github Actions를 활용한 CI/CD 적용
 - favicon 및 title 적용, <head> 태그에 대한 이해
```

### _상세 요구사항_

- Functional Requirements
  - React 앱을 build 하고 deploy 합니다.
    - 정적 호스팅은 S3를 사용합니다.
    - S3 버킷은 **make-frontend-onboarding**를 사용합니다.
      > 버킷 내부에 본인 닉네임으로 directory를 만들고, 그 안에 배포하도록 합니다.
    - 그 외 기타 설정은 기본값을 사용하되 필요에 따라 변경할 수 있습니다.
  - `.github/workflows`를 활용하여 CI/CD 스크립트를 작성합니다. [CI/CD란?](https://jud00.tistory.com/entry/CICD%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C)
    - [Github Actions](https://meetup.toast.com/posts/286)
  - `favicon` 및 `title`을 본인의 스타일에 맞게 적용해보세요! :)

### _선수지식_

- CI/CD
- Github Actions
- S3
- 정적 호스팅
  [CSR과 SSR + 정적/동적 웹페이지 관련 자료](https://velog.io/@cjw/CSRSSR-SPAMPA)
