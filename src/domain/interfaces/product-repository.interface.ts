import Product from "../entities/product.entity";

export default interface IProductRepository {
  findProductByName(name: string): Product | undefined | null;

  createOne(product: Product): Product;
}