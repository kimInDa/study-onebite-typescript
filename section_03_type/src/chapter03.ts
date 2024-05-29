/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // 업 캐스팅

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog; // ✅ OK
// dog = animal; // ❌ NO

// -> 객체 타입은 프로퍼티를 기준으로 타입을 정의하는 구조적 타입 시스템을 따른다.
// -> 따라서 슈퍼, 서브 타입 관계를 프로퍼티를 기준으로 정해진다.
// -> 추가 프로퍼티가 없는(조건이 더 적은) 타입이 슈퍼 타입이 된다.

/**
 * 초과 프로퍼티 검사
 * 변수를 초기화하는 값으로 객체 리터럴을 사용하면 발동하는 검사
 * 타입에 정의해두지 않은 프로퍼티를 작성하지 않도록 막는 검사(객체 타입에 정의된 프로퍼티만 넣을 수 있다.)
 */

// 슈퍼 타입
type Book = {
  name: string;
  price: number;
};

//서브 타입
type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

// ✅ OK
book = programmingBook;

// ❌ NO
let book2: Book = {
  // 오류 발생
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs", -> 초과 프로퍼티
};

// ✅ OK
book2 = programmingBook;

// 초과 프로프티 검사는 함수의 매개변수에도 적용된다.
function func(book: Book) {}

// ❌ NO
func({
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs" -> 초과 프로퍼티
});

// ✅ OK
func(programmingBook);
