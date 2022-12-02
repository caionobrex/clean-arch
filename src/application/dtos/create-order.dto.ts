export default class CreateOrderDto {
  private items: OrderItemDto[];
}

class OrderItemDto {
  private product: any
  private qty: number
}