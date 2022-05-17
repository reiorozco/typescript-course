// // Union Types
// export function combine(input1: string | number, input2: string | number) {
//   let result;
//
//   typeof input1 === "number" && typeof input2 === "number"
//     ? (result = input1 + input2)
//     : (result = input1.toString() + input2.toString());
//
//   return result;
// }

// Literal Types
// Type Aliases/Custom Types

type Combinable = string | number;
type ConversionDescription = "as-number" | "as-string";

export function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescription
) {
  let result;

  (typeof input1 === "number" && typeof input2 === "number") ||
  resultConversion === "as-number"
    ? (result = +input1 + +input2)
    : (result = input1.toString() + input2.toString());

  return result;
}

// Type Aliases & Object Types
export type User = { name: string; age: number };
