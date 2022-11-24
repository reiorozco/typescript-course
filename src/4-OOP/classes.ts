class Account {
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }

    // Record a transaction
    this._balance += amount;
  }

  // private calculateTax() {}

  get balance() {
    return this._balance;
  }

  set balance(value: number) {
    if (value < 0) throw new Error("Invalid value");

    this._balance = value;
  }
}

export let account = new Account(1, "Rei", 2500);
account.deposit(500);
account.owner = "Fabio";
account.balance = 2000; // set Balance(Getters and Setters)

console.log("get Balance", account.balance);
console.log("typeof", typeof account);
console.log("instanceof", account instanceof Account);

class SeatAssignment {
  // A1, A2...
  // Mosh, John...
  // Index signature property
  [seatNumber: string]: string;
}

export let seats = new SeatAssignment();
seats.A1 = "Mosh";
seats["A2"] = "Rei";
seats.A3 = "Jon";

console.log("seats.A2", seats.A2);
