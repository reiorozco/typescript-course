class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair<string, string>("1", "Date1");

// # Extending generic Classes

export interface Product {
  name: string;
  price: number;
}

export class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  // keyof Operator
  // example: keyof Product => "name" | "price"
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }

  get store() {
    return this._objects;
  }
}
// 3 Options
// Pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
  compress() {}
}

// Restrict the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  override find(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}

// Fix the generic type parameter
class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    return [];
  }
}
