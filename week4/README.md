# Fetching Library

`상태 관리`는 프론트엔드 개발자라면 프로젝트에서 중요하게 다뤄야하는 일 중 하나이다.
<br><Br>

`상태 관리`의 중요성이 대두되면서, 최근 `react-query` `swr` `RTKQuery` 등 여러 `Data Fetching 라이브러리`가 인기를 끌고 있다.
<br><br>

일반적으로 React 프로젝트에서 관리해야하는 상태의 종류는 다음과 같다.

1. `Local State` - 컴포넌트 내부에서만 사용되는 state
2. `Global State` - 여러 컴포넌트에서 사용되는 state
3. `Server State` - 서버에서 받아오는 state
   <br><br>

기존의 상태 관리 방법은 다음과 같다.

- 간단한 Global State의 같은 경우에는 `props`를 활용한다.
- 복잡한 Global State의 같은 경우에는 상태 관리 라이브러리를 사용한다. 대표적으로 `Redux`를 활용한다.
- Server State 같은 경우에는 `Redux`의 미들웨어를 활용한다.
  <br><br>

`Redux`의 치명적인 단점은 너무나도 크고 복잡한 규모의 코드이다. Global State를 관리하기 위한 Redux 코드만으로도 감당하기 힘든데, Server State를 관리하기 위해서 비동기 통신의 성공, 실패 여부에 대한 코드를 전부 작성해줘야 한다.
<br><br>

이러한 문제점으로 인하여 `Data Fetching Library`의 인기가 급상승해졌다.
<br><br>

최근 인기있는 상태 관리 방법은 다음과 같다.

- Global State의 같은 경우에는 `Context` 및 비교적 가벼운 `Recoil` `Zustand` `Jotai`를 활용한다.
- Server State의 같은 경우에는 `SWR` `react-qeury`와 같은 Data Fetching Library를 활용한다.
  <br><br>

이러한 방식을 통해서 얻는 이점은 다응과 같다.

1. Client Side의 데이터 관리 코드와 Server Side의 데이터 관리 코드를 완전히 분리시킬 수 있다.
2. 코드의 양이 확연하게 줄어든다.
3. Data Fetching Library와 Suspense의 조합으로 로딩 및 에러 핸들링을 유려하게 할 수 있다.
   <br><br>

## react-query vs SWR

각각 라이브러리의 정의는 다음과 같다.
<br><br>

- react-query

  > React Query는 리액트 애플리케이션에 서버 상태를 가져오고, 캐싱하고, 동기화하고, 업데이트하는 것을 쉽게 해준다.

- SWR
  > SWR은 먼저 캐시에서 데이터를 반환한 다음, 서버에 데이터를 가져오는 요청을 보내고, 마지막으로 최신 데이터를 제공하는 전략이다.

<br>

둘의 차이점을 알아보자.
<br><br>

### Provider

- React Query - 별도의 Provider로 감싸줘야 사용이 가능하다.
- SWR - 별도의 Provider없이 컴포넌트에서 바로 사용이 가능하다.

### Fetcher

- React Query - 두 번째 인자인 fetcher에 직접 url을 전달한다.
- SWR - 첫 번째 인자에 url을 넣고, 이를 fetcher에 전달한다.

```javascript
// React Query
const { isLoading, error, data } = useQuery({
    ['username', username],
    () => axios.get(`https://api.github.com/users/${username}`)

    if (isLoading) return <p>Loading...</p>

    if (error) return <p>Error has occured!!</p>

    return data;
})
```

```javascript
// SWR
const { data, error } = useSWR("/user", fetcher);

if (error) return <p>Error has occured!!</p>;

if (!data) return <p>Loading...</p>;
```

### Mutation

두 라이브러리의 뮤테이션 개념은 다르다.

- React Query - POST/PUT/PATCH/DELETE 를 통하여 **서버의 상태를 변형** 시킨다.
- SWR - 받아온 서버의 데이터를 클라이언트 사이드에서 변형시킨다.
  <br><br>

## SWR과 React-Query의 장, 단점

- React-Query - SWR에서 지원하지 않는 수많은 강력한 기능들이 존재하고, 커스텀이 가능하다. 하지만, 그만큼 번들 사이즈가 크다는 단점이 존재한다.
- SWR - React-Query보다 지원하는 기능은 적지만, 번들 사이즈의 크기가 작다. 간단한 애플리케이션 개발 시 유용하게 사용될 듯 싶다.
  <br><br>

## 어떻게 하면 Fetching Library 뽕을 뽑을 수 있을까?

Fetching Library를 단순히 서버 사이드의 데이터 상태 관리만을 위해서 사용하는 것은 아쉽다.
<br><br>

클라이언트 사이드와 서버 사이드의 데이터 관리 코드를 나눠서 관심사를 분리하는 것을 이상으로 핸들링도 해보면 좋을 것 같다.
<br><br>

Fetching Library와 React의 Suspense와의 시너지는 엄청나다. 기존의 로딩 및 에러 처리보다 훨씬 선언적으로 처리할 수 있다.
<br><br>

이러한 라이브러리들을 통하여 코드를 간단하게 하여 **개발자 경험도 상승시키고, 유려한 에러 처리를 통하여 사용자 경험도 상승**시킬 수 있지 않을까?
