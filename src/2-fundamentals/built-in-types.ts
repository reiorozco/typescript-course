let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;
let level;

// # Any
function renderDocument(document: any) {
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

// # Functions

function calculateTax(
  income: number,
  taxYear = 2022,
  optional?: string
): number {
  console.log("Optional parameter", optional);
  if (taxYear < 2022) return income * 1.2;

  return income * 1.3;
}

calculateTax(10_000, 2022);

// # Objects

let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Mosh",
  retire: (date) => console.log(date),
};
