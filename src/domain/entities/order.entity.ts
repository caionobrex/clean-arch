import Product from "./product.entity"
import User from "./user.entity"

export enum OrderStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
}

export class OrderItem {
  private _subTotal: number;

  constructor(
    private _product: Product,
    private _qty: number,
  ) {
    this._subTotal = this.qty * this.product.price;
  }

  public get product(): Product { return this._product }

  public set qty(qty: number) { this._qty = qty; }

  public get qty(): number { return this._qty; }

  public get subTotal(): number { return this._subTotal; }
}

export default class Order {
  private _total: number;

  constructor(
    private _id: number | string,
    private _items: OrderItem[],
    private _createdAt: Date,
    private _owner: User,
    private _status: OrderStatus = OrderStatus.PENDING
  ) {
    this.calculateTotal()
  }

  private calculateTotal() {
    let total = 0
    this._items.forEach((i: OrderItem) => total += i.product.price * i.qty)
    this._total = total
  }

  public addItem(item: OrderItem): void {
    if (this.alreadyContainsProduct(item.product))
      this._items.forEach((i) => {
        if (i.product.name === item.product.name) i.qty =+ 1;
      })
    else this._items.push(item)
    this.calculateTotal()
  }

  private alreadyContainsProduct(product: Product): boolean {
    return this._items.find((i) => i.product.name === product.name) ? true : false
  }

  public get id(): number | string { return this._id }

  public get owner(): User { return this._owner }

  public get total(): number { return this._total }

  public get status(): OrderStatus { return this._status }

  public set status(status: OrderStatus) { this._status = status; }
}