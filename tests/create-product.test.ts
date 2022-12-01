import IProductRepository from '../src/domain/interfaces/product-repository.interface';
import InMemoryProductRepository from '../src/domain/repositories/in-memory.repository';
import CreateProduct from '../src/domain/usecases/create-product.usecase';
import Product from '../src/domain/entities/product.entity';

describe('CreateProduct', () => {
  describe('execute', () => {
    let productRepository: IProductRepository;
    beforeEach(() => {
      productRepository = new InMemoryProductRepository();
    });
    it('should throw an error if product exists by name', () => {
      expect(() => new CreateProduct(productRepository).execute({ name: 'Test', price: 20 })).toThrow(Error)
    });
    it('should throw an error if product name is empty', () => {
      expect(() => new CreateProduct(productRepository).execute({ name: '', price: 20 })).toThrow(Error)
    });
    it('should throw an error if product price is less than 0', () => {
      expect(() => new CreateProduct(productRepository).execute({ name: 'Test', price: -10 })).toThrow(Error)
    });
    it('should create a product and save it on database', () => {
      const product: Product = new CreateProduct(productRepository).execute({ name: 'Test 2', price: 20 });
      expect(productRepository.findProductByName(product.name)).toEqual(product);
    });
  });
});