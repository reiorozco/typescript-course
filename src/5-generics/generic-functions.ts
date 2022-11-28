class ArrayUtils {
  static wrapInArray<T>(value: T): T[] {
    return [value];
  }
}

let arrayNumbers = ArrayUtils.wrapInArray(1);

// # Generic Interfaces

interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}

interface Person {
  name: string;
}

interface Product {
  name: string;
  price: number;
}

let result = fetch<Product>("url");

let serial = result.data?.name;

// # Constraints (Restricciones)

class Animal {
  constructor(public name: string) {}
}

class Aquatic extends Animal {}

function echo<T extends Person>(value: T): T {
  return value;
}

let echo1 = echo(new Aquatic("Fish"));
