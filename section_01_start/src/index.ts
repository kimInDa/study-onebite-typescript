import { hello } from "./hello";

hello();

// module 옵션
// -> 타입스크립트는 ES 모듈 시스템과 유사하게 export, import 키워드를 사용한다.
// -> 그리고 컴파일 결과를 (module 옵션을 통해) CommonJS와 ESM(ES 모듈 시스템) 중에 선택이 가능하다.
