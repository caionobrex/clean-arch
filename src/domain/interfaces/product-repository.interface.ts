import Product from "../entities/product.entity";

export default interface IProductRepository {
  findAll(): Product[]

  findProductByName(name: string): Product | undefined | null;

  findById(id: number | string): Promise<Product>

  createOne(name: string, price: number): Promise<Product>;
}