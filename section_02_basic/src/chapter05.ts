// enum 타입
// -> 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// -> 컴파일 결과 enum은 사라지지 않고 객체로 변환된다.

// 숫자형 enum
enum Role {
  ADMIN = 10,
  USER,
  GUEST,
}

// 문자형 enum
enum Language {
  korean = "ko",
  english = "en",
}

// enum 적용
const user1 = {
  name: "이정환",
  role: Role.ADMIN, // 10 <- 관리자
  language: Language.korean, // ko <- KR-ko로 헷갈리지 않고 값을 넣어줄 수 있다.
};

const user2 = {
  name: "홍길동",
  role: Role.USER, // 11 <- 일반 유저
};

const user3 = {
  name: "아무개",
  role: Role.GUEST, // 12 <- 게스트
};

console.log(user1, user2, user3);
