import Order, { OrderItem } from "../entities/order.entity";
import Product from "../entities/product.entity";
import User from "../entities/user.entity";

export interface IOrderRepository {
  findAll(): Promise<Order[]>;

  findOne(id: number | string): Promise<Order>;

  findOrdersByUserId(userId: number | string): Promise<Order[]>;

  createOne({  id, items, createdAt, owner }: { id: number; items: OrderItem[]; createdAt: Date, owner: User }): Promise<Order>
}
