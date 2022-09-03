## 일급 객체가 뭔가요?

**일급객체(first class object)**
란 일급시민의 조건을 충족하는 객체로, 다음의 조건을 만족하는 객체이다. 

1. 변수나 자료구조(객체, 배열 등)에 할당할 수 있다.
2. 함수의 매개변수에 전달할 수 있다.
3. 함수의 반환 값으로 사용할 수 있다.

여기서, 위의 일급시민의 조건을 충족하는 함수를 
**일급함수(first class function)**
라고 하는데

**런타임(runtime)시 생성이 가능하고, 익명으로 생성(무명의 리터럴로 생성)이 가능하다**는 추가적인 조건이 있다.

자바스크립트에선 **함수도 Object로 취급하고 있기 때문에 함수도 일급객체**이며, 자바스크립트의 함수는 일급함수의 추가조건도 만족하므로, **일급함수**다.

```javascript
// 함수는 무명의 리터럴로 생성할 수 있다.
// 함수는 변수에 저장할 수 있다.
const increase = function (num) {
  return ++num;
};

const decrease = function (num) {
  return --num;
};

// 함수는 객체에 저장할 수 있다.
const predicates = { increase, decrease };

console.log(predicates); // predicates:  { increase: [Function: increase], decrease: [Function: decrease] }

// 함수의 매개변수에게 전달할 수 있다.
// 함수의 반환값으로 사용할 수 있다.
function makeCounter(predicate) {
  let num = 0;

  return function () {
    num = predicate(num);
    return num;
  };
}

// 함수는 매개변수에게 함수를 전달할 수 있다.
const increaser = makeCounter(predicates.increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

// 함수는 매개변수에게 함수를 전달할 수 있다.
const decreaser = makeCounter(predicates.decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2
```
<br>

## 자바스크립트에서 함수가 일급 객체라면, 일급 객체로 뭘 할 수 있나요?

**함수형 프로그래밍**에서의 **callback** 개념과 **고차함수**개념을 가능하게 해준다. 이 개념들을 사용하기 위해선, 변수할당, 함수간 인자 전달 및 반환이 가능해야하는데 이를 보장해주는 것이 일급객체 개념이다. 
따라서, 함수지향 언어가 되기 위해서는 일급 객체 즉, 일급 함수 개념을 만족해야되며, 자바스크립트에서는 이를 보장하기 때문에 함수형 패러다임을 갖춘 언어라 볼 수 있다.

<br>

## 그러면, 함수형 프로그래밍이 뭔가요?

함수형 프로그래밍은 거의 모든 것을 순수 함수로 나누어 문제를 해결하는 기법으로, 작은 문제를 해결하기 위한 함수를 작성하여 가독성을 높이고 유지보수를 용이순수 함수를 통해 부수효과를 최대한 억제하여 오류를 피하고 프로그램의 안전성을 높이려는 프로그래밍 패러다임 을 함수형 프로그래밍 이라 한다.

<br>

## 순수 함수와 일반 함수는 어떤 차이가 있죠?
1. 순수 함수 : 어떤 외부 상태에 의존하지도 않고 변경하지도 않는, 즉 부수 효과가 없는 함수를 순수 함수라 한다.
2. 비순수 함수 : 외부 상태에 의존하거나 외부 상태를 변경하는, 즉 부수 효과가 있는 함수를 비순수 함수라고 한다.

<br>
