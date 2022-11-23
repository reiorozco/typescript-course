type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee1: Employee = {
  id: 1,
  name: "Mosh",
  retire: (date) => console.log(date),
};

// # Literal Types(exact, specific)
type Quantity = 50 | 100;

let quantity: Quantity = 50;

// # Nullable Types
function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola!");
}

greet("Hello!");
greet(null);
greet(undefined);

// # Optional chaining
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
console.log(customer?.birthday?.getDate());

// Optional element access operator
// customers?.[0]

// Optional call
let log: any = null;
log?.("a");

// # Nullish Coalescing Operator
let speed: number | null = null;
// Falsy(undefined, null, "", false, 0)
let ride = {
  speed: speed ?? 30,
};
