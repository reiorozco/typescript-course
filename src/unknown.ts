let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Rei";

if (userInput === "string") userName = userInput;

function throwError(message: string, code: number): never {
  throw { message, codeNumber: code };
}
