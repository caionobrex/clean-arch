import { IOrderRepository } from "../interfaces/order-repository.interface";

export default class CreateOrder {
  constructor(private readonly orderRepository: IOrderRepository) {}

  execute() {
    this.orderRepository.findOne();
  }
}