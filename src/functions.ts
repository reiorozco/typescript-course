export function add(n1: number, n2: number): number {
  return n1 + n2;
}

export function printResult(num: number): void {
  console.log(num);
}

export const addValues: (a: number, b: number) => number = add;

// addValues = printResult;

export function addAndHandle(
  n1: number,
  n2: number,
  cb: (num: number) => void
) {
  const result = n1 + n2;
  cb(result);
}
