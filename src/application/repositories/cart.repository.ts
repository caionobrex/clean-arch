import { Cart } from "../../domain/entities/cart.entity";
import Product from "../../domain/entities/product.entity";
import productEntity from "../../domain/entities/product.entity";
import User from "../../domain/entities/user.entity";
import userEntity from "../../domain/entities/user.entity";
import { ICartRepository } from "../../domain/interfaces/cart-repository.interface";

export class CartRepository implements ICartRepository {
  private readonly carts: Cart[] = [new Cart(1, [new Product(1, 'Test', 20)], new User(1, 'Caio', 'Nobre', 'test@gmail.com', '', 20, ''))]

  findOneById(id: string | number): Promise<Cart> {
    return Promise.resolve(this.carts.find((c) => c.id === id))
  }

  findByOwnerId(ownerId: number | string): Promise<Cart> {
    return Promise.resolve(this.carts.find((cart) => cart.owner.id === ownerId));
  }

  createOne({ products, owner }: { products: productEntity[]; owner: userEntity; }): Promise<Cart> {
    const cart = new Cart(this.carts.length + 1, products, owner)
    this.carts.push(cart)
    return Promise.resolve(cart)
  }

  updateOne(cartId: number, cart: Cart): Promise<Cart> {
    this.carts.forEach((c) => {
      if (c.id === cartId) c = cart
    })
    return Promise.resolve(this.findOneById(cartId));
  }
}