import Order, { OrderItem } from "../entities/order.entity";
import { IOrderRepository } from "../interfaces/order-repository.interface";
import { IUserRepository } from "../interfaces/user-repository.interface";

export default class CreateOrder {
  constructor(
    private readonly orderRepository: IOrderRepository,
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(userId: number | string, items: OrderItem[]): Promise<Order> {
    const user = await this.userRepository.findOneById(userId)
    if (items.length === 0) throw new Error('An order cannot be empty')
    return this.orderRepository.createOne({ createdAt: new Date(), owner: user, items })
  }
}
