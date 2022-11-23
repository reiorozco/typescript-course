type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee1: Employee = {
  id: 1,
  name: "Mosh",
  retire: (date) => console.log(date),
};
