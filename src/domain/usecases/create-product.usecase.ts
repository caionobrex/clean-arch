import IProductRepository from "../interfaces/product-repository.interface";
import Product from "../entities/product.entity";

export default class CreateProduct {
  constructor(private readonly productRepository: IProductRepository) {}

  execute({ name, price }: { name: string, price: number }): Product {
    let product: Product | null | undefined = this.productRepository.findProductByName(name);
    if (product) throw new Error('This product already exists.');
    return this.productRepository.createOne(new Product(name, price));
  }
}