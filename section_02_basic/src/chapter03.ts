// ✅ 객체 타입 정의하기
// 1. object
let user0: object = {
  id: 1,
  name: "이정환",
};
// user0.id // ❌ -> 오류! object는 변수 타입을 정의할 뿐 프로퍼티에 대한 정의는 하지 못하기 때문에

// 2. 객체 리터럴 타입
// -> 객체 내 프로퍼티들의 타입까지 정의할 수 있는 방식
// -> 객체 내 구조에 따라 타입을 정하므로 '구조적 타입 시스템'이라고 한다.
let user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "이정환",
};
user.id; // ⭕️ -> 프로퍼티에 잘 접근할 수 있다.

// 3. 선택적(Optional) 프로퍼티
// -> 있어도 되고 없어도 되는 프로퍼티
let user2: {
  id?: number; // -> 물음표를 붙여준다.
  name: string;
} = {
  // id가 없어도 오류가 나지 않는다.
  name: "이정환",
};

// 4. 읽기 전용 프로퍼티(Readonly Property)
// -> 절대 값이 수정되어서는 안되는 프로퍼티가 있다면 readonly 키워드를 사용하여 읽기 전용 프로퍼티로 만들어준다.
let config: {
  readonly apikey: string; // readonly 키워드를 붙여준다.
} = {
  apikey: "MY API KEY",
};
// config.apikey = "hacked"; // ❌ -> 읽기 전용이므로 오류!
