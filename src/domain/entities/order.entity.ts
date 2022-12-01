import Product from "./product.entity"

export default class Order {
  id: number
  products: Product[]
  total: number
  createdAt: Date
}