import { Cart } from "../entities/cart.entity";
import { ICartRepository } from "../interfaces/cart-repository.interface";

export default class GetUserCart {
  constructor(private readonly cartRepository: ICartRepository) {}

  async execute(userId: number | string): Promise<Cart> {
    return await this.cartRepository.findByOwnerId(userId);
  }
}
