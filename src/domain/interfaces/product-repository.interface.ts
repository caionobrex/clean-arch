import Product from "../entities/product.entity";

export default interface IProductRepository {
  findAll(): Product[]

  findProductByName(name: string): Product | undefined | null;

  createOne(product: Product): Product;
}