
## 생성자 함수가 뭔가요?
생성자 함수란 new 연산자와 함께 호출하여 객체를 생성하는 함수를 말한다. 생성자 함수에 의해 생성된 객체를 인스턴스라고 한다.

자바스크립트는 Object 생성자 함수 이외에도 String, Number, Boolean, Function, Array, Date, RegExp, Promise 등의 빌트인 생성자 함수를 제공한다.

생성자 함수는 객체를 생성하기 위해 사용되므로, 반드시 Object 생성자 함수를 사용해 객체를 생성해야 하는 것은 아니다. (객체 리터럴을 통해서도 만들 수 있기 때문)

`ctrl + F '자바스크립트에서 객체를 생성하는 방법은 어떤 것들이 있나요?'`


## 객체 리터럴로 만들 때와는 무슨 차이가 있죠? 왜 생성자 함수를 사용하나요?
객체 리터럴에 의한 객체 생성 방식은 단 하나의 객체만 생성하기 때문에 같은 프로퍼티를 갖는 객체를 여러 개 생샌해야 하는 경우 비효율적이다.

생성자 함수를 통해 객체를 생성한다면 마치 객체를 생성하기 위한 템플릿처럼 생성자 함수를 사용하여 프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성할 수 있다.

```javascript
// 생성자 함수 (일반 함수와 동일한 방식으로 만들어지는 선언문이다)

function Circle(radius) {
  // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.radius = radius; // ex) circle1의 radius에 radius(5)를 할당해줘
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 인스턴스의 생성
const circle1 = new Circle(5); // 반지름이 5인 Circle 객체를 생성
const circle2 = new Circle(10); // 반지름이 10인 Circle 객체를 생성

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20
```

## 생성자 함수가 객체(인스턴스)를 생성하는 과정에 대해 간략하게 설명해줄 수 있나요?
1. 생성자 함수 선언
2. 인스턴스 생성
3. 인스턴스 초기화
4. 인스턴스 반환
```javascript
// 1. 생성자 함수 선언
function Circle(radius) {
  // 3. 인스턴스 초기화
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
  // 4. 인스턴스 생성시에 생성자 함수를 호출할 때 넣은 인수를 this 바인딩을 통해 프로퍼티에 할당한 뒤, 인스턴스를 반환한다
}
// 2. 인스턴스 생성
const circle1 = new Circle(5); // 반지름이 5인 Circle 객체를 생성
```