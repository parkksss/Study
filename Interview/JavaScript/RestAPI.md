## REST API가 뭔가요?

REST는 HTTP의 장점을 최대한 활용할 수 있는 아키텍처로서, HTTP 프로토콜을 의도에 맞게 디자인하도록 유도하고 있다.

즉, REST는 HTTP를 기반으로 클라이언트가 서버의 리소스에 접근하는 방식을 규정한 아키텍처고, REST API는 REST를 기반으로 서비스 API를 구현한 것을 의미한다.

REST의 기본 원칙을 성실히 지킨 서비스 디자인을 'RESTful'이라고 표현한다.

<br>

## REST API의 구성은 어떤 것이 있나요?
REST API는 ① 자원(resource), ② 행위 (verb), ③ 표현 (representations) 의 3가지 요소로 구성된다.


|구성 요소|내용|표현 방법|
|:--:|:--:|:--:|
|자원(resource)|자원|URI(엔드 포인트)|
|행위(verb)|자원에 대한 행위|HTTP 요청 메서드|
|표현(representations)|자원에 대한 행위의 구체적 내용|페이로드|


<br>

## REST API를 설계하는데 중요한 것이 있을까요?
REST에서 가장 중요한 기본적인 원칙은 두 가지다.

① URI는 리소스를 표현하는데 집중해야 한다
② 행위에 대한 정의는 HTTP 요청 메서드를 통해 해야 한다

위 두 규칙이 RESTful API를 설계하는 중심 규칙이다.

URI는 리소스를 표현해야 한다 URI는 리소스를 표현하는 데 중점을 두어야 한다. 리소스를 식별할 수 있는 이름은 ① 동사보다는 ② 명사를 사용한다.

따라서 리소스 이름에 get 같은 행위에 대한 표현이 들어가서는 안 된다.

```javascript
# bad
GET /getTodos/1
GET /todos/show/1

# good
GET /todos/1
```

<br>

## HTTP 요청 메서드에 대해서 아는대로 얘기해보세요

|HTTP 요청 메서드|종류|목적|페이로드|
|:--:|:--:|:--:|:--:|
|GET|index/retrieve|모든/특정 리소스 취득|x|
|POST|create|리소스 생성|o|
|PUT|replace|리소스의 전체 교체|o|
|PATCH|modify|리소스 일부 수정|o|
|DELETE|delete|모든/특정 리소스 삭제|x|

<br>