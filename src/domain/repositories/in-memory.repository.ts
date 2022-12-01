import IProductRepository from "../interfaces/product-repository.interface";
import Product from "../entities/product.entity";

export default class InMemoryProductRepository implements IProductRepository {
  private products: Product[] = [new Product('Test', 12)]
  
  findProductByName(name: string): Product | undefined | null {
    return this.products.find((p: Product) => p.name === name);
  }

  createOne(product: Product) {
    this.products.push(product);
    return product;
  }
}