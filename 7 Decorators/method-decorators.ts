function enumerable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  @enumerable(false)
  greet() {
    return "Hello, " + this.greeting;
  }
}

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  console.log("Log method decorator called");
  const original = descriptor.value as Function;

  descriptor.value = function (...arg: any) {
    console.log("Before");
    original.call(this, ...arg);
    console.log("After");
  };
}

function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  console.log("Capitalize accessor decorator called");
  const original = descriptor.get;

  descriptor.get = function () {
    const result = original?.call(this);

    return typeof result === "string" ? result.toUpperCase() : result;
  };
}

export class Person {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalize
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
    // return null;
  }

  @Log
  say(message: string) {
    console.log("Person says " + message);
  }
}

let person = new Person("Rei", "Orozco");
person.say("Hello");
console.log(person.fullName);
