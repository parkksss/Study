## 자바스크립트에서 클래스가 생기기 전에는 어떤 방식으로 객체지향 패턴을 구현했나요?

자바스크립트는 프로토타입 기반 객체지향 언어로서, 클래스가 필요 없는 객체지향 프로그래밍 언어이다.
생성자 함수와 프로토타입을 통해 객체지향 언어의 상속을 구현할 수 있었다.

```javascript
// ES5 생성자 함수
function Person(name) {
  this.name = name;
}

// 프로토타입 메서드
Person.prototype.sayHi = function () {
  console.log("Hi! My name is " + this.name);
};

// 인스턴스 생성
var me = new Person("Lee");
me.sayHi(); // Hi! My name is Lee
```

하지만 클래스 기반 언어에 익숙한 프로그래머들은 프로토타입 기반의 프로그래밍 방식에 혼란을 느낄 수 있으며, 자바스크립트를 어렵게 느끼게 하는 하나의 장벽처럼 인식되었다.

ES6에서 도입된 클래스 는 ①기존 프로토타입 기반 객체지향 프로그래밍보다 ②자바나 C#과 같은 클래스 기반 객체지향 프로그래밍에 익숙한 프로그래머가 더욱 빠르게 학습할 수 있도록 클래스 기반 객체지향 프로그래밍 언어와 매우 흡사한 새로운 객체 생성 메커니즘을 제시한다.

자바스크립트에서는 프로토타입 기반의 객체지향 프로그래밍을 기반으로 설계되었지만,
이에 어려움을 느끼는 객체지향 프로그래밍에 익숙한 프로그래머들을 위해 ES6부터 클래스 개념을 도입하였다.

## 그럼 생성자 함수와 클래스는 어떤 차이가 있나요?

1. 클래스를 new 연산자 없이 호출하면 에러가 발생한다. 하지만, 생성자 함수는 일반 함수로 호출된다.

2. 클래스는 상속을 지원하는 extends와 super 키워드를 제공한다. 생성자 함수는 해당 키워드를 제공하지 않는다.

3. 클래스는 호이스팅이 발생하지 않는 것처럼 동작한다. 하지만 함수 선언문으로 작성된 클래스는 함수 호이스팅이, 함수 표현식으로 정의한 생성자 함수는 변수 호이스팅이 발생한다.

4. 클래스 내의 모든 코드에는 암묵적으로 strict mode가 저장되어 실행되며 strict mode를 해제할 수 없다. <-> 생성자 함수는 암묵적으로 strict mode가 지정되지 않는다.

5. 클래스의 constructor, 프로토타입 메서드, 정적 메서드는 모두 프로퍼티 어트리뷰트 [[Enumerable]] 값이 false인 열거가 되지 않는 값이다.

## 클래스 정의

```javascript
// 클래스 선언문
class Person {}

// 함수 선언문으로 작성시, 함수 호이스팅이
// 함수 표현식으로 작성시, 변수 호이스팅이 발생한다.
```

### 익명 함수와 기명 함수로 클래스 정의

```javascript
// 익명 클래스 표현식
const Person = class {};

// 기명 클래스 표현식
const Person = class MyClass {};
```

### 클래스 몸체에 정의할 수 있는 메서드

① constructor(생성자)
② 프로토타입 메서드
③ 정적 메서드

```javascript
class Person {
  // constructor: 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name; // name 프로퍼티는 public하다.
  }

  // 프로토타입 메서드
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }

  // 정적 메서드 (static을 붙여 정의한다)
  static sayHello() {
    console.log("Hello!");
  }
}

// 인스턴스 생성
const me = new Person("Lee");

// ① 인스턴스의 프로퍼티 참조
console.log(me.name); // Lee
// ② 프로토타입 메서드 호출
me.sayHi(); // Hi! My name is Lee
// ③ 정적 메서드 호출 (호출 시에 인스턴스가 아닌 클래스의 메서드로 동작한다.)
Person.sayHello(); // Hello!
```

### 정적 메서드와 프로토타입 메서드의 차이

1. 정적 메서드와 프로토타입 메서드는 자신이 속해 있는 프로토타입 체인이 다르다. 🌟
2. 정적 메서드는 클래스로 호출하고 프로토타입 메서드는 인스턴스로 호출한다. 🌟
3. 정적 메서드는 인스턴스를 프로퍼티로 참조할 수 없지만 프로토타입 메서드는 인스턴스 프로퍼티를 참조할 수 있다.


## 클래스의 상속

① 상속에 의한 클래스 확장은 ②프로토타입 기반 상속과는 다른 개념이다.
②는 프로토타입 체인을 통해 다른 객체의 자산을 상속받는 개념이지만 ①은 기존 클래스를 상속받아 새로운 클래스를 확장(extends)하여 정의하는 것이다.

### extends 키워드

```javascript
// 수퍼(베이스/부모)클래스
class Base {}

// 서브(파생/자식)클래스
class Derived extends Base {}
```

## 클래스 확장

```javascript
class Animal {
  constructor(age, weight) {
    this.age = age;
    this.weight = weight;
  }

  eat() {
    return "eat";
  }

  move() {
    return "move";
  }
}

// 상속을 통해 Animal 클래스를 확장한 Bird 클래스
class Bird extends Animal {
  fly() {
    return "fly";
  }
}

const bird = new Bird(1, 5);

console.log(bird); // Bird {age: 1, weight: 5}
console.log(bird instanceof Bird); // true
console.log(bird instanceof Animal); // true (프로토타입 체인으로 얽혀있기 때문에)
console.log(bird instanceof Object); // true (스코프의 최 상위에는 Object가 있다)

console.log(bird.eat()); // eat
console.log(bird.move()); // move
console.log(bird.fly()); // fly

```

### super 키워드
super 키워드는 함수처럼 호출할 수도 있고 this와 같이 식별자처럼 참조할 수 있는 특수한 키워드다.

1. super를 호출하면 수퍼클래스의 constructor(super-constructor)를 호출한다.
2. super를 참조하면 수퍼클래스의 메서드를 호출할 수 있다.

### super 호출
```javascript
// 수퍼클래스
class Base {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

// 서브클래스
class Derived extends Base {
  constructor(a, b, c) {
    super(a, b); // 수퍼클래스에 정의한 프로퍼티(a,b)를 그대로 사용하겠다는 의미
    this.c = c;
  }
}

const derived = new Derived(1, 2, 3);
console.log(derived); // Derived {a: 1, b: 2, c: 3}
```

### super 참조
```javascript
// 수퍼클래스
class Base {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return `Hi! ${this.name}`;
  }
}

// 서브클래스
class Derived extends Base {
  sayHi() {
    // super.sayHi는 수퍼클래스의 프로토타입 메서드를 가리킨다.
    return `${super.sayHi()}. how are you doing?`;
  }
}

const derived = new Derived("Lee");
console.log(derived.sayHi()); // Hi! Lee. how are you doing?
```



### 추상화
추상화는 다양한 속성 중에서 프로그램에 필요한 속성만 간추려 내어 표현하는 것이다
```javascript
// 수퍼클래스
class Rectangle {
  constructor(width, height) {
    // constructor
    this.width = width;
    this.height = height;
  }

  // 프로토타입 메서드
  getArea() {
    return this.width * this.height;
  }

  toString() {
    return `width = ${this.width}, height = ${this.height}`;
  }
}

// 서브클래스
class ColorRectangle extends Rectangle {
  // extends 키워드를 통해 수퍼클래스를 상속받음
  constructor(width, height, color) {
    super(width, height);
    this.color = color;
  }

  // 메서드 오버라이딩
  toString() {
    return super.toString() + `, color = ${this.color}`;
  }
}

const colorRectangle = new ColorRectangle(2, 4, "red");
console.log(colorRectangle); // ColorRectangle {width: 2, height: 4, color: "red"}

// 상속을 통해 getArea 메서드를 호출
console.log(colorRectangle.getArea()); // 8
// 오버라이딩된 toString 메서드를 호출
console.log(colorRectangle.toString()); // width = 2, height = 4, color = red
```

위 코드의 흐름은 다음과 같다

1. 서브클래스의 super 호출
2. 수퍼클래스의 인스턴스 생성과 this 바인딩
3. 수퍼클래스의 인스턴스 초기화
4. 서브클래스 constructor로의 복귀와 this 바인딩
5. 서브클래스의 인스턴스 초기화
6. 인스턴스 반환


### 오버라이딩
상위(super) 클래스가 가지고 있는 메서드를 하위(sub) 클래스가 재정의하여 사용하는 방식

### 오버로딩
함수의 이름은 동일하지만 매개변수의 타입 또는 개수가 다른 메서드를 구현하고 매개변수에 의해 메서드를 구별하여 호출하는 방식이다.
자바스크립트는 오버로딩을 지원하지 않지만 arguments 객체를 사용하여 구현할 수는 있다.

<br>
