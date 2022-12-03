import { IUserRepository } from "../src/domain/interfaces/user-repository.interface";
import User from "../src/domain/entities/user.entity";

export class Deposit {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(cpf: string, value: number): Promise<void> {
    const user: User | null | undefined = await this.userRepository.findOneByCpf(cpf);
    if (!user) throw new Error('this user does not exists');
    user.balance += value;
    this.userRepository.updateOne(cpf, user);
  }
}