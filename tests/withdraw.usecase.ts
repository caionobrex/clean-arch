import { IUserRepository } from "../src/domain/interfaces/user-repository.interface";
import User from "../src/domain/entities/user.entity";

export default class Withdraw {
  constructor(private readonly usersRepository: IUserRepository) {}

  async execute(value: number, cpf: string) {
    const user: User = await this.usersRepository.findOneByCpf(cpf);
    if (value > user.balance) throw new Error('You do not have enough money to withdraw.');
    user.balance -= value;
    this.usersRepository.updateOne(cpf, user);
  }
}