import { Cart } from "../entities/cart.entity";
import Product from "../entities/product.entity";
import User from "../entities/user.entity";

export interface ICartRepository {
  findOneById(id: number | string): Promise<Cart>;

  findByOwnerId(ownerId: number | string): Promise<Cart>;

  createOne({ products, owner }: { products: Product[], owner: User }): Promise<Cart>;

  updateOne(cartId: number | string, cart: Cart): Promise<Cart>;
}