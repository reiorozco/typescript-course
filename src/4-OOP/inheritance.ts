class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  walk(): void {
    console.log("Walking...");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest(): void {
    console.log("Taking a test...");
  }
}

export let student = new Student(1, "Rei", "Orozco");

console.log("fullName", student.fullName);
student.walk();
student.takeTest();
