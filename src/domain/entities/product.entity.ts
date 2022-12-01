export default class Product {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  get name() { return this._name; }

  get price() { return this.price; }

  set name(name: string) {
    if (name.length === 0) throw new Error('Product name cannot be empty.')
    this._name = name;
  }

  set price(price: number) {
    if (price < 0) throw new Error('Price cannot be less than 0.')
    this._price = price;
  }
}