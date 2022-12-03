import Product from "./product.entity";
import User from "./user.entity";

export class Cart {
  private _total: number

  constructor(
    private _id: number | string,
    private _products: Product[],
    private _owner: User,
  ) {
    this.calculateTotal();
  }

  private calculateTotal() {
    let total = 0
    this._products.forEach((p: Product) => total += p.price)
    this._total = total
  }

  public removeAllProducts(): void {
    this._products = []
    this.calculateTotal()
  }

  public addProduct(product: Product) { this.products.push(product); }

  public get id(): number | string { return this._id }

  public get products(): Product[] { return this._products }

  public get owner(): User { return this._owner }

  public get total(): number { return this._total }

}