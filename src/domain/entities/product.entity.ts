export default class Product {
  constructor(
    private _id: number | string,
    private _name: string,
    private _price: number
  ) {}

  get id(): number | string { return this._id }

  get name() { return this._name; }

  get price() { return this._price; }

  set name(name: string) {
    if (name.length === 0) throw new Error('Product name cannot be empty.')
    this._name = name;
  }

  set price(price: number) {
    if (price < 0) throw new Error('Price cannot be less than 0.')
    this._price = price;
  }
}