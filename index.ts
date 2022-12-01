import InMemoryProductRepository from "./src/application/repositories/in-memory.repository";
import { CreateProductDto } from "./src/application/dtos/create-product.dto";
import { ProductController } from "./src/application/controllers/product.controller";
import expressApp from './src/infra/express'
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

expressApp.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`)
})