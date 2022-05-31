export class Department {
  protected employees: string[] = [];

  constructor(private id: string, public name: string) {}

  describe() {
    console.log(`Department: ${this.id}:${this.name}`);
  }

  addEmployee(employee: string) {
    // validation etc ...
    this.employees.push(employee);
  }

  listEmployees() {
    console.log("Quantity: " + this.employees.length);
    console.log("Employees: " + this.employees);
  }
}

// Inheritance
export class ITDepartment extends Department {
  constructor(id: string, public admin: string) {
    super(id, "IT Department");
  }

  addEmployee(employee: string) {
    if (employee === "Fabio") return console.log("Fabio is the President.");

    this.employees.push(employee);
  }
}
