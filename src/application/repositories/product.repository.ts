import IProductRepository from "../../domain/interfaces/product-repository.interface";
import Product from "../../domain/entities/product.entity";

export default class ProductRepository implements IProductRepository {

  private products: Product[] = [new Product(1, 'Test', 12)]

  findAll(): Product[] {
    return this.products;
  }

  findById(id: string | number): Promise<Product> {
    return Promise.resolve(this.products.find((p: Product) => p.id === id))
  }
  
  findProductByName(name: string): Product | undefined | null {
    return this.products.find((p: Product) => p.name === name);
  }

  createOne(name: string, price: number): Promise<Product> {
    this.products.push(new Product(this.products.length + 1, name, price));
    return Promise.resolve(this.findProductByName(name));
  }
}