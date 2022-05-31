export class Point {
  constructor(private _x?: number, private _y?: number) {}

  draw() {
    console.log(`X: ${this._x}, Y: ${this._y}`);
  }

  static difference(point1: number, point2: number) {
    const result = point1 - point2;

    return "The difference is: " + result;
  }

  get x() {
    return this._x;
  }

  set x(value) {
    if (!value || value < 10)
      throw new Error("Value cannot be less than 10 or undefined.");

    this._x = value;
  }
}
