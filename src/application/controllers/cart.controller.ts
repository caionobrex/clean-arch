import { Cart } from "../../domain/entities/cart.entity";
import { ICartRepository } from "../../domain/interfaces/cart-repository.interface";
import IProductRepository from "../../domain/interfaces/product-repository.interface";
import { IUserRepository } from "../../domain/interfaces/user-repository.interface";
import { AddProductToCard } from "../../domain/usecases/add-product-to-cart.usecase";
import GetUserCart from "../../domain/usecases/get-user-cart.usecase";

export class CartController {
  constructor(
    private readonly cartRepository: ICartRepository,
    private readonly productRepository: IProductRepository,
    private readonly userRepository: IUserRepository,
  ) {}

  async addProduct(productId: number | string, userId: string | number) {
    new AddProductToCard(this.cartRepository, this.productRepository, this.userRepository).execute(productId, userId);
  }

  async getUserCart(userId: string | number): Promise<Cart> {
    return new GetUserCart(this.cartRepository).execute(userId);
  }
}

class CartControllerAdapterForExpress {
  constructor(private readonly cartController: CartController) {}

  async addProduct(req, res): Promise<void> {
    await this.cartController.addProduct(req.body.productId, req.user.id)
    res.status(204).end();
  }

  async getUserCart(req, res): Promise<void> {
     res.json(await this.cartController.getUserCart(req.user.id));
  }
}
