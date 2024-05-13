// 1. 타입 별칭
// -> 타입을 변수처럼 정의해서 사용할 수 있는 타입
// -> 동일한 타입의 여러 객체에 동시에 적용할 수 있다.
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user1: User = {
  id: 1,
  name: "이정환",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

// 2. 인덱스 시그니처
// -> 객체의 key와 value의 규칙을 기준으로 객체의 type을 정의할 수 있는 문법
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

// -> 인덱스 시그니처 주의 사항!
// --> value의 타입이 모두 같아야 한다.
type CountryNumberCodes = {
  [key: string]: number;
  // Spain: string; // ❌ 오류! -> number 타입으로 같아야 한다.
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 820,
  UnitedKingdom: 826,
};
