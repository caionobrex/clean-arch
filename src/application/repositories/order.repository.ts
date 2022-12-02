import Order, { OrderItem } from "../../domain/entities/order.entity";
import User from "../../domain/entities/user.entity";
import { IOrderRepository } from "../../domain/interfaces/order-repository.interface";

export class OrderRepository implements IOrderRepository {
  private readonly orders: Order[] = [
    new Order(1, [], new Date(), new User(1, 'Caio', 'Nobre', '', 5))
  ]

  findAll(): Promise<Order[]> {
    return Promise.resolve(this.orders)
  }

  findOne(id: number | string): Promise<Order> {
    return Promise.resolve(this.orders.find((order: Order) => order.id === id))
  }

  findOrdersByUserId(userId: number | string): Promise<Order[]> {
    return Promise.resolve(this.orders.filter((order: Order) => order.owner.id === userId))
  }

  createOne({  id, items, createdAt, owner }: { id: number; items: OrderItem[]; createdAt: Date, owner: User }): Promise<Order> {
    const order = new Order(id, items, createdAt, owner)
    this.orders.push(order)
    return Promise.resolve(order)
  }
}