class Account {
  readonly id: number;
  owner: string;
  balance: number;
  nickname?: string;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }

    this.balance += amount;
  }
}

export let account = new Account(1, "Rei", 2500);
account.deposit(500);
console.log(account.balance);
console.log("typeof", typeof account);
console.log("instanceof", account instanceof Account);
