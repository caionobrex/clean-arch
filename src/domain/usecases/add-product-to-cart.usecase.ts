import { Cart } from "../entities/cart.entity";
import Product from "../entities/product.entity";
import User from "../entities/user.entity";
import { ICartRepository } from "../interfaces/cart-repository.interface";
import IProductRepository from "../interfaces/product-repository.interface";
import { IUserRepository } from "../interfaces/user-repository.interface";

export class AddProductToCard {
  constructor(
    private readonly cartRepository: ICartRepository,
    private readonly productRepository: IProductRepository,
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(productId: number | string, userId: string | number): Promise<Cart> {
    let cart: Cart = await this.cartRepository.findByOwnerId(userId);
    if (!cart) {
      const user: User = await this.userRepository.findOneById(userId);
      cart = new Cart(2, [], user);
      await this.cartRepository.createOne(cart);
    }
    const product: Product = await this.productRepository.findById(productId);
    if (!product) throw new Error('This product doest not exist');
    cart.addProduct(product);
    return await this.cartRepository.updateOne(cart.id, cart);
  }
}