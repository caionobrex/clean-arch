const express = require('express')
const app = express()
import { ProductController } from '../application/controllers/product.controller'
import { CreateProductDto } from '../application/dtos/create-product.dto';
import ProductRepository from '../application/repositories/product.repository'
import { JwtService } from '../application/services/jwt.service';

class AuthenticationMiddleware {
  fn(req, res, next) {
    const jwtService = new JwtService()
    if (!req.headers.authorization) return res.status(401).end();
    if (!jwtService.verify(req.headers.authorization)) return res.status(401).end();
    next()
  }
}

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

app.get('/products', (req, res) => {})
app.post('/products', (req, res) => {
  new ExpressProductControllerAdapter(new ProductController(new ProductRepository())).createProduct(req, res)
})

app.get('/users/orders', new AuthenticationMiddleware().fn, (req, res) => {})
app.get('/users/cart', new AuthenticationMiddleware().fn, (req, res) => {})

app.post('/checkout', new AuthenticationMiddleware().fn, (req, res) => {})

export default app