import { IUserRepository } from "../interfaces/user-repository.interface";
import User from "../entities/user.entity";

export default class Withdraw {
  constructor(private readonly usersRepository: IUserRepository) {}

  execute(value: number, cpf: string) {
    const user: User = this.usersRepository.findOneByCpf(cpf);
    if (value > user.balance) throw new Error('You do not have enough money to withdraw.');
    user.balance -= value;
    this.usersRepository.updateOne(cpf, user);
  }
}