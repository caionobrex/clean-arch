import Order, { OrderStatus } from "../entities/order.entity";
import { IOrderRepository } from "../interfaces/order-repository.interface";

export class Buy {
  constructor(private readonly orderRepository: IOrderRepository) {}

  async execute({ orderId }: Required<{ orderId: string | number }>) {
    const order: Order = await this.orderRepository.findOne(orderId);
    if (!order) throw new Error('Order doest not exists')
    order.status = OrderStatus.PAID;
    await this.orderRepository.updateOne(orderId, order)
  }
}
