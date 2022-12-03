import Order, { OrderItem } from "../../domain/entities/order.entity";
import Product from "../../domain/entities/product.entity";
import User from "../../domain/entities/user.entity";
import { IOrderRepository } from "../../domain/interfaces/order-repository.interface";

export class OrderRepository implements IOrderRepository {
  private readonly orders: Order[] = [
    new Order(1, [new OrderItem(new Product(1, 'Testing', 20), 4)], new Date(), new User(1, 'Caio', 'Nobre', 'test@gmail.com', '', 20, 'caio123'))
  ]

  updateOne(orderId: string | number, order: Order): Promise<Order> {
    this.orders.forEach((o: Order) => {
      if (o.id === orderId) o = order;
    })
    return Promise.resolve(order);
  }

  findAll(): Promise<Order[]> {
    return Promise.resolve(this.orders)
  }

  findOne(id: number | string): Promise<Order> {
    return Promise.resolve(this.orders.find((order: Order) => order.id === id))
  }

  findOrdersByUserId(userId: number | string): Promise<Order[]> {
    return Promise.resolve(this.orders.filter((order: Order) => order.owner.id === userId))
  }

  createOne({ items, createdAt, owner }: Required<{ id: number; items: OrderItem[]; createdAt: Date, owner: User }>): Promise<Order> {
    const order = new Order(this.orders.length + 1, items, createdAt, owner)
    this.orders.push(order)
    return Promise.resolve(order)
  }
}