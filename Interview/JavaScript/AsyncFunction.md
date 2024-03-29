## 동기와 비동기의 차이점에 대해서 설명해줄 수 있나요?

- 현재 실행 중인 태스크가 종료될 때까지 다음에 실행될 태스크가 대기하는 방식 을 동기(synchronous) 처리 방식이라고 하며
- 현재 실행 중인 태스크가 종료되지 않은 상태라 해도 다음 태스크를 곧바로 실행하는 방식 을 비동기(asynchronous) 처리라고 한다.
- 대표적으로 타이머 함수인 ① setTimeout/ setInterval ② HTTP 요청 ③ 이벤트 핸들러 는 비동기 처리 방식으로 동작한다.

<br>

## 이벤트 루프와 태스크 큐에 대해서 알고 있나요?

자바스크립트는 싱글 스레드로 동작하기 때문에 한 번에 하나의 태스크만 처리할 수 있다 하지만 브라우저가 동작하는 것을 살펴보면 많은 태스크가 동시에 처리되는 것처럼 느껴진다

예를 들어, HTML 요소가 애니메이션 효과를 통해 움직이면서 이벤트를 처리하기도 하고, HTTP 요청을 통해 서버로부터 데이터를 가지고 오면서 렌더링하기도 한다. 이처럼 자바스크립트의 동시성을 지원하는 것이 바로 이벤트 루프(event loop)다.

이벤트 루프는 브라우저에 내장되어 있는 기능 중 하나다. 

<br>

## 다음과 같은 코드에서 이벤트 루프와 태스크 큐가 어떻게 동작하는지 설명해볼 수 있나요?

```javascript
function foo() {
  console.log("foo");
}

function bar() {
  console.log("bar");
}

setTimeout(foo, 0); // 0초(실제는 4ms) 후에 foo 함수가 호출된다.
bar();
```

1. 실행 컨텍스트에 의해 전역 스코프에 존재하는 함수 (foo, bar)가 평가되어 전역 실행 컨텍스트를 생성합니다

2. 전역 코드 실행 단계에서 위에 상대적으로 위에 존재하는 setTimeout 함수를 호출합니다

    - 이때 setTimeout 함수의 실행 컨텍스트가 생성되고 콜스택에 푸시되어 실행 중인 실행 컨텍스트가 됩니다

3. setTimeout 함수가 실행되면서 콜백 함수를 호출 스케줄링 (주어진 시간 0ms)하고 종료되어 콜 스택에서 팝됩니다
    - 이때 타이머의 설정과 타이머가 만료되면 콜백 함수(foo)를 태스크 큐에 푸시하는 것은 브라우저의 역할입니다

4. 브라우저가 수행하는 4.1 과 자바스크립트 엔진이 수행하는 4.2 는 병렬 처리됩니다

    4.1 브라우저는 타이머를 설정하고 타이머의 만료를 기다린다. 이후 타이머가 만료되면 콜백 함수 foo가 태스크 큐에 푸시됩니다

    4.2 bar 함수가 호출되어 bar 함수의 함수 실행 컨텍스트가 생성되고 콜 스택에 푸시되어 현재 실행 중인 컨텍스트가 된다. 이후 bar 함수가 종료되어 콜 스택에서 팝된다.

5. 비동기로 진행되는 함수 ① setTimeout/ setInterval ② HTTP 요청 ③ 이벤트 핸들러 은 브라우저에 의해 태스크 큐로 이동하게 되는데, 동기적으로 실행되는 함수가 모두 실행되고 콜 스택에서 팝된 이후에 태스크 큐에 먼저 들어온 함수부터 차례대로 콜스택에 푸시한다

```javascript
>>>
bar

foo
```

<br>


## 마이크로태스크 큐에 대해서 알고 있나요?

마이크로태스크 큐 는 태스크큐 와 별도의 큐로 후속 처리 메서드의 콜백 함수가 일시 저장된다.

그 외의 비동기 함수 ① setTimeout/ setInterval ② HTTP 요청 ③ 이벤트 핸들러 의 콜백 함수나 이벤트 핸들러는 태스크 큐에 일시 저장된다.

콜백 함수나 이벤트 핸들러를 일시 저장한다는 점에서 태스크 큐와 동일하지만 마이크로태스크 큐는 태스크 큐보다 우선순위가 높다.

```javascript
setTimeout(() => console.log(1), 0);

Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));

```

프로미스의 후속 처리 메서드(then, catch, finally)도 비동기적으로 동작하므로 1 > 2 > 3 의 순으로 출력될 것처럼 보이지만 2 > 3 > 1 순으로 출력된다.

프로미스의 후속 처리 메서드의 콜백 함수는 태스크 큐 가 아니라 마이크로태스크 큐 에 저장되기 때문이다.

<br>