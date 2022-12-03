import Order, { OrderItem } from "../entities/order.entity";
import User from "../entities/user.entity";

export interface IOrderRepository {
  findAll(): Promise<Order[]>;

  findOne(id: number | string): Promise<Order>;

  findOrdersByUserId(userId: number | string): Promise<Order[]>;

  updateOne(orderId: string | number, order: Order): Promise<Order>

  createOne({ items, createdAt, owner }: Required<{ items: OrderItem[]; createdAt: Date, owner: User }>): Promise<Order>
}
