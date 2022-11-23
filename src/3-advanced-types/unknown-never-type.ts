function render(document: unknown) {
  // Narrowing
  if (typeof document === "string") {
    console.log(document.toLowerCase());
  }

  document.move();
  document.fly();
  document.whateverWeWant();
}

// # Never Type
function reject(message: string): never {
  throw new Error(message);
}

function processEvents(): never {
  while (true) {
    // Read a message from a queue
  }
}

reject("...");
processEvents();
console.log("Hello World");
