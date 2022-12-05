function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    let value: string;

    const descriptor: PropertyDescriptor = {
      get(): any {
        return value;
      },

      set(newValue: string) {
        if (newValue.length < length)
          throw new Error(
            `${propertyName} should be at least ${length} characters long.`
          );
        value = newValue;
      },
    };

    Object.defineProperty(target, propertyName, descriptor);
  };
}

export class User {
  @MinLength(4)
  password: string;

  constructor(password: string) {
    this.password = password;
  }
}

let user = new User("1234");
// user.password = "12";
console.log(user.password);

// # Parameter Decorators
type WatchedParameter = {
  methodName: string;
  parameterIndex: number;
};

const watchedParameters: WatchedParameter[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
  watchedParameters.push({ methodName, parameterIndex });
}

class Vehicle {
  move(@Watch speed: number) {}
}

console.log(watchedParameters);
