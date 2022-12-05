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
  const original = descriptor.value as Function;

  descriptor.value = function (...arg: any) {
    console.log("Before");
    original.call(this, ...arg);
    console.log("After");
  };
}

export class Person {
  @Log
  say(message: string) {
    console.log("Person says " + message);
  }
}

let person = new Person();
person.say("Hello");
