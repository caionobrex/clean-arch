export class CreateProductDto {
  name: string
  price: number

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}