import Product from "../entities/product.entity";
import IProductRepository from "../interfaces/product-repository.interface";

export class ListAllProducts {
  constructor(private readonly productRepository: IProductRepository) {}

  async execute(): Promise<Product[]> {
    return this.productRepository.findAll();
  }
}