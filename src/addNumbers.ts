export function addNumbers(
  x: number,
  y: number,
  showResult: boolean,
  phrase: string
) {
  const result = x + y;

  if (showResult) console.log(phrase + result);

  return result;
}
