## 빌트인 객체가 뭔가요? 종류는 어떤게 있죠?
개발자가 모든 기능을 구현하지 않고, 편하게 개발할 수 있도록 자바스크립트에서 기본적으로 제공하는 객체입니다.

자바스크립트에서 객체는 크게 3개의 객체로 분류할 수 있다.

표준 빌트인 객체
호스트 객체
사용자 정의 객체

### 세부설명

① 표준 빌트인 객체

앞서 설명한 자바스크립트에서 기본적으로 제공하는 객체 중 ECMAScript 사양에 정의된 표준 객체. 애플리케이션 전역의 공통 기능을 제공합니다
표준 빌트인 객체는 전역 객체의 프로퍼티로서 제공됩니다. 따라서 별도의 선언 없이 전역 변수처럼 언제나 참조할 수 있다
new 연산자를 사용하여 표준 빌트인 객체와 결합하여 선언하면, 생성된 인스턴스로 하여금 해당 함수에 내장된(빌트인 된) 프로토타입 메서드들을 이용할 수 있다.
② 호스트 객체

ECMAScript 사양에 정의되어 있지 않지만 자바스크립트 실행 환경(브라우저 또는 Node.js 환경)에서 추가로 제공하는 객체를 말한다
브라우저 환경에서는 DOM, BOM, CANVAS, XMLHttpRequest, fetch, Web Storage, Web Component와 같은 클라이언트 사이드 Web API를 호스트 객체로 제공합니다
③ 사용자 정의 객체

사용자 정의 객체는 표준 빌트인 객체와 호스트 객체처럼 기본 제공되는 객체가 아닌 사용자가 직접 정의한 객체를 말한다.

## 래퍼 객체에 대해서 알고 있나요?
레퍼(wrapper)객체는 원시 타입을 마치 객체 타입처럼 사용하는 과정 속에서 생기는 임시 객체이다. 원시 타입인 String, Number, Boolean으로 특정된다.

이는 원시값인 문자열, 숫자, 불리언 값의 경우 이들 원시값에 대해 마치 객체처럼 마침표 표기법 (.) 으로 접근하면 자바스크립트 엔진이 일시적으로 원시값을 연관된 객체로 변환해 주기 때문이다.

즉, 원시값을 객체처럼 사용하면 자바스크립트 엔진은 암묵적으로 연관된 객체를 생성하여 생성된 객체로 프로퍼티에 접근하거나 메서드를 호출하고 다시 원시값으로 되돌린다.