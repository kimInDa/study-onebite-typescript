/**
 * Unknown 타입
 * 모든 타입의 슈퍼 타입
 * 따라서 모든 타입을 업 캐스트할 수 있고, 반대로 모든 타입을 다운캐스트할 수 없다.
 */

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
}
