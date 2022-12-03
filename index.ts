import InMemoryProductRepository from "./src/application/repositories/product.repository";
import { CreateProductDto } from "./src/application/dtos/create-product.dto";
import { ProductController } from "./src/application/controllers/product.controller";
import expressApp from './src/infra/express'
import { AddProductToCard } from "./src/domain/usecases/add-product-to-cart.usecase";
import { CartRepository } from "./src/application/repositories/cart.repository";
import CreateOrder from "./src/domain/usecases/create-order.usecase";
import { OrderItem } from "./src/domain/entities/order.entity";
import { OrderRepository } from "./src/application/repositories/order.repository";
import UserRepository from "./src/application/repositories/user.repository";
import { ListUserOrders } from "./src/domain/usecases/list-user-orders.usecase";
import { Buy } from "./src/domain/usecases/buy.usecase";
import { SignIn } from "./src/domain/usecases/signin.usecase";
import { JwtService } from "./src/application/services/jwt.service";
import { CryptoService } from "./src/application/services/crypto.service";
import { SignUp } from "./src/domain/usecases/signup.usecase";
// import { DataSource } from "typeorm"

// const AppDataSource = new DataSource({
//     type: "mysql",
//     host: "localhost",
//     port: 3306,
//     username: "test",
//     password: "test",
//     database: "test",
// })

// interface ICliProductControllerAdapter {
//   createProduct(args: string[]): void
// }

// class CliProductControllerAdapter implements ICliProductControllerAdapter {
//   constructor(private readonly productController: ProductController) {}

//   createProduct(args: string[]): void {
//     console.log(this.productController.createProduct(new CreateProductDto(args[2], +args[3])));
//   }
// }

// try {
//   new CliProductControllerAdapter(new ProductController(new InMemoryProductRepository())).createProduct(process.argv)
// } catch (err) {
//   console.log(err);
// }

// expressApp.listen(3000, () => {
//   console.log(`Example app listening on port ${3000}`)
// })
async function main() {
  // const cartRepository = new CartRepository()
  // const productRepository = new InMemoryProductRepository()
  // const orderRepository = new OrderRepository();
  const userRepository = new UserRepository();
  // console.log(await new AddProductToCard(cartRepository, productRepository, userRepository).execute(1, 1))
  // const products = productRepository.findAll();
  // const order = await new CreateOrder(orderRepository, userRepository).execute(1, [ new OrderItem(products[0], 2), new OrderItem(products[0], 3) ])
  // console.log(order)
  // console.log("=====users orders======")
  // console.log(await new Buy(orderRepository).execute({ orderId: 2 }))
  // console.log(await new ListUserOrders(orderRepository).execute(1))
  const jwtService = new JwtService()
  const cryptoService = new CryptoService()
  new SignUp(userRepository, cryptoService, jwtService).execute('Caio', 'Nobre', 'test@gmail.com', '123456', 'caio123', 20)
  console.log(await userRepository.findAll())
  console.log(await new SignIn(userRepository, jwtService, cryptoService).execute({ username: 'test@gmail.com', password: 'caio123' }))
}

main();