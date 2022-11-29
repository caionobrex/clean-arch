import { IUserRepository } from "./user-repository.interface";
import User from "./user.entity";

export class Deposit {
  constructor(private readonly userRepository: IUserRepository) {}

  execute(cpf: string, value: number): void {
    const user: User | null | undefined = this.userRepository.findOneByCpf(cpf);
    if (!user) throw new Error('this user does not exists');
    user.balance += value;
    this.userRepository.updateOne(cpf, user);
  }
}