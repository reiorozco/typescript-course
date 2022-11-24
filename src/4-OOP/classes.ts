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

  getBalance() {
    return this._balance;
  }
}

export let account = new Account(1, "Rei", 2500);
account.deposit(500);

console.log("getBalance", account.getBalance());
console.log("typeof", typeof account);
console.log("instanceof", account instanceof Account);
