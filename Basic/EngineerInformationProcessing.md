# Engineer Information Processing

## 목차

- [요구사항 확인 🔥](#요구사항-확인)
- [화면 설계](#화면-설계)
- [데이터 입출력 구현](#데이터-입출력-구현)
- [통합 구현](#통합-구현)
- [인터페이스 구현](#인터페이스-구현)
- [프로그래밍 언어 활용](#프로그래밍-언어-활용)
- [SQL 응용](#SQL-응용)
- [서버 프로그램 구현](#서버-프로그램-구현)
- [소프트웨어 개발 보안 구축](#소프트웨어-개발-보안-구축)
- [애플리케이션 ㅌ테스트 관리](#애플리케이션-테스트-관리)
- [응용 SW 기초 기술 활용](#응용-SW-기초-기술-활용)
- [제품 소프트웨어 패키징](#제품-소프트웨어-패키징)

<br>

## 요구사항 확인
### 소프트웨어 개발 방법론
### 현행 시스템 분석
1. 현행 시스템 파악
- 현행 시스템 파악이란?
- 현행 시스템 파악 절차
  1) 구성/기능/인터페이스 파악
  2) 아키텍처 및 소프트웨어 구성 파악
  3) 하드웨어 및 네트워크 구성 파악
- 소프트웨어 아키텍처(Software Architecture)란?
- 소프트웨어 아키텍처 프레임워크(Software Architecture Framework)란?
- 소프트웨어 아키텍처 프레임워크 구성요소
  - 아키텍처 명세서(Architectural Description)
  - 이해관계자(Stackeholder)
  - 관심사(Concerns)
  - 관점(Viewpoint)
  - 뷰(View)
  - 근거(Rationale)
  - 목표(Mission)
  - 환경(Environment)
  - 시스템(System)
- 소프트웨어 아키텍처 4+1 뷰란?
- 유스케이스란?
- 소프트웨어 아키텍처 4+1 뷰 구성요소
  - 유스케이스 뷰(Usecase View)
  - 논리 뷰(Logical View)
  - 프로세스 뷰(Process View)
  - 구현 뷰(Implementation View)
  - 배포 뷰(Deployment View)
- 소프트웨어 아키텍처 패턴(Software Architecture Pattern)이란?
- 소프트웨어 아키텍처 패턴의 필요성
- 소프트웨어 아키텍처 패턴 유형
  - 계층화 패턴(Layered Pattern)
  - 클라이언트-서버 패턴(Client-Server Pattern)
  - 파이프-필터 패턴(Pipe-Filter Pattern)
  - 브로커 패턴(Broker Pattern)
  - 모델-뷰-컨트롤러 패턴(MVC; Model View Controller Pattern)
- 소프트웨어 아키텍처 비용 평가 모델이란?
- 아키텍처 품질 속성이란?
- 소프트웨어 아키텍처 비용 평가 모델 종류
  - SAAM(Software Architecture Analysis Method)
  - ATAM(Architecture Trade-off Analysis Method)
  - CBAM(Cost Benefit Analysis Method)
  - ADR(Active Design Review)
  - ARID(Active Reviews for Intermediate Designs)
- 소프트웨어 아키텍처 비용 평가 모델 관계
- 디자인 패턴(Design Pattern)이란?
- 디자인 패턴 구성요소
  - 패턴의 이름
  - 문제 및 배경
  - 솔루션
  - 사례
  - 결과
  - 샘플 코드
- 디자인 패턴 유형
  - 목적에 따라 : 생성, 구조, 행위
  - 범위에 따라 : 클래스, 객체
- 컴파일 타임(Compile Time)이란
- 런타임(Run Time)이란
- 디자인 패턴의 종류
  - 생성패턴
    - Builder
    - Prototype
    - Factory Method
    - Abstract Factory
    - Singleton
  - 구조패턴
    - Bridge
    - Decorator
    - Facade
    - Flyweight
    - Proxy
    - Composite
    - Adapter
  - 행위패턴
    - Mediator
    - Interpreter
    - Iterator
    - Template Method
    - Observer
    - State
    - Visitor
    - Command
    - Strategy
    - Memento
    - Chain of Responsibility
<br>

2. 개발 기술 환경 정의
> 개발 기술 환경 현행 시스템 분석

- 운영체제 현행 시스템 분석
  - 운영체제(Operating System)란?
  - 운영체제 현행 시스템 분석시 고려사항
    - 품질 측면 : 신뢰도, 성능
    - 지원 측면 : 기술지원, 주변기기, 구축비용
    - 배치 작업(Batch Job)이란?
  - 운영체제 종류 및 특징
    - PC
      - 윈도즈(Windows) - Microsoft
      - 유닉스(UNIX) - IBM, HP, SUN
      - 리눅스(Linux) - Linus Torvalds
    - 모바일
      - 안드로이드(Android) - Google
      - iOS - Apple
- 네트워크 현행 시스템 분석
  - 네트워크(Network)란?
  - OSI 7계층(Layer)이란?
  - [1계층] 물리 계층(Physical Layer)
  - [2계층] 데이터 링크 계층(Data Link Layer)
  - [3계층] 네트워크 계층(Network Layer)
  - [4계층] 전송 계층(Transport Layer)
  - [5계층] 세션 계층(Session Layer)
  - [6계층] 표현 계층(Presentation Layer)
  - [7계층] 응용 계층(Application Layer)
  - 네트워크 현행 시스템 분석
  - 백본망(Backkbone Network)란?
  - 라우터(Router)란?
  - 스위치(Switch)란?
  - 게이트웨이(Gateway)란?
  - 방화벽(Firewall)이란?
- DBMS 현행 시스템 분석
  - DBMS(Database Management System)이란?
  - DBMS의 기능
    - 중복 제어
    - 접근 통제
    - 인터페이스 제공
    - 관계 표현
    - 샤딩/파티셔닝
    - 무결성 제약 조건
    - 백업 및 회복
  - DBMS 현행 시스템 분석 시 고려사항
    - 성능 측면 : 가용성, 성능, 상호 호환성
    - 지원 측면 : 기술지원, 구축비용
- 미들웨어 현행 시스템 분석
  - 미들웨어(Middleware)란?
  - 웹 애플리케이션 서버(WAS; Web Application Server)란?
  - 미들웨어 현행 시스템 분석 시 고려사항
    - 성능 측면 : 가용성, 성능
    - 지원 측면 : 기술 지원, 구축 비용
- 오픈 소스 사용 시 고려사항

### 요구사항 확인
<!-- 주석 -->

<br>

## 화면 설계
### UI 요구사항 확인
### UI 설계
<br>

## 데이터 입출력 구현
### 논리 데이터 저장소 확인
### 물리 데이터 저장소 설계
### 데이터베이스 기초 활용하기
<br>

## 통합 구현
### 연계 메커니즘 구성
### 내외부 연계 모듈 구현
<br>

## 인터페이스 구현
### 인터페이스 설계 확인
### 인터페이스 기능 구현
### 인터페이스 구현 검증
<br>

## 프로그래밍 언어 활용
### 프로그래밍을 위한 기본 사항
### C언어
### 자바
### 파이썬
<br>

## SQL 응용
### 데이터베이스 기본
### 응용 SQL 작성하기
### SQL 활용 및 최적화
<br>

## 서버 프로그램 구현
### 개발환경 구축
### 공통 모듈 구현
### 배치 프로그램 구현
<br>

## 소프트웨어 개발 보안 구축
### 소프트웨어 개발 보안 설계
### 소프트웨어 개발 보안 구현
<br>

## 애플리케이션 테스트 관리
### 애플리케이션 테스트 케이스 설계
### 애플리케이션 통합 테스트
### 애플리케이션 성능 개선
<br>

## 응용 SW 기초 기술 활용
### 운영체제의 특징
### 네트워크 기초 활용하기
### 기본 개발환경 구축하기
<br>

## 제품 소프트웨어 패키징
### 제품 소프트웨어 패키징하기
### 제품 소프트웨어 매뉴얼 작성 및 버전 등록
<br>
