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

// # Overriding

class Teacher extends Person {
  override get fullName() {
    return `Profesor ${super.fullName}`;
  }
}

let teacher = new Teacher("Mosh", "Hamed-ani");

console.log("Teacher fullName", teacher.fullName);

// # Polymorphism

class Principal extends Person {
  override get fullName() {
    return `Principal ${super.fullName}`;
  }
}

function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

console.log("printNames");
printNames([
  new Principal("Silvia", "Gomez"),
  teacher,
  student,
  new Student(2, "Fabio", "Cari"),
]);

// # Abstract Classes and Methods

abstract class Shape {
  protected constructor(public color: string) {}

  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radio: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log("Rendering a circle.");
  }
}
