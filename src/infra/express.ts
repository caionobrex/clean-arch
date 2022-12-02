const express = require('express')
const app = express()
import { ProductController } from '../application/controllers/product.controller'
import { CreateProductDto } from '../application/dtos/create-product.dto';
import InMemoryProductRepository from '../application/repositories/in-memory.repository'

class ExpressProductControllerAdapter {
  private readonly productController: ProductController;

  constructor(productController: ProductController) {
    this.productController = productController;
  }

  createProduct(req, res) {
    const product = this.productController.createProduct(new CreateProductDto(req.query.name, +req.query.price));
    res.json(product);
  }
}

app.get('/create-product', (req, res) => {
  new ExpressProductControllerAdapter(new ProductController(new InMemoryProductRepository())).createProduct(req, res)
})

app.post('/create-order', (req, res) => {})

export default app