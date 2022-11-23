let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;
let level;

function render(document: any) {
  console.log(document);
}

// # Arrays
let numbersAndString: (number | string)[] = [1, 2, "3"];
let numbers: number[] = [1, 2, 3];

// # Tuples
let user: [number, string] = [1, "Rei"];

// # Enums
const small = 1;
const medium = 2;
const large = 3;

const enum Size {
  Small,
  Medium,
  Large,
}

enum OtherSizes {
  Small = "S",
  Medium = "M",
  Large = "L",
}

let mySize: OtherSizes = OtherSizes.Medium;
