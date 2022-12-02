import { OrderRepository } from "../../application/repositories/order.repository";
import Order from "../entities/order.entity";

export class ListUserOrders {
  constructor(private readonly ordersRepository: OrderRepository) {}

  async execute(userId: number | string): Promise<Order[]> {
    return this.ordersRepository.findOrdersByUserId(userId);
  }
}