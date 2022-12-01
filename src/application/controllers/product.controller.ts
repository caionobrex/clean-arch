import Product from "../../domain/entities/product.entity";
import IProductRepository from "../../domain/interfaces/product-repository.interface";
import CreateProduct from "../../domain/usecases/create-product.usecase";
import { CreateProductResponseDto } from "../dtos/create-product-response.dto";
import { CreateProductDto } from "../dtos/create-product.dto";

export class ProductController {
  constructor(private readonly productRepository: IProductRepository) {}

  createProduct(productDto: CreateProductDto): CreateProductResponseDto {
    const product: Product = new CreateProduct(this.productRepository).execute({ name: productDto.name, price: productDto.price });
    return new CreateProductResponseDto(
      product.name,
      product.price,
    )
  }
}