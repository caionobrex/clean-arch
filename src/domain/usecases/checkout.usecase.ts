import { Cart } from "../entities/cart.entity";
import Order, { OrderItem } from "../entities/order.entity";
import Product from "../entities/product.entity";
import User from "../entities/user.entity";
import { ICartRepository } from "../interfaces/cart-repository.interface";
import { IOrderRepository } from "../interfaces/order-repository.interface";
import { IUserRepository } from "../interfaces/user-repository.interface";

export class Checkout {
  constructor(
    private readonly cartRepository: ICartRepository,
    private readonly orderRepository: IOrderRepository,
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(userId: string | number): Promise<Order> {
    const cart: Cart = await this.cartRepository.findByOwnerId(userId);
    const user: User = await this.userRepository.findOneById(userId);
    const order = await this.orderRepository.createOne({
      items: cart.products.map((product: Product) => new OrderItem(product, 2)),
      owner: user,
      createdAt: new Date()
    })
    cart.removeAllProducts();
    await this.cartRepository.updateOne(cart.id, cart)
    return Promise.resolve(order)
  }
}
