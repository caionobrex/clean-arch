import { IUserRepository } from "../interfaces/user-repository.interface";
import User from "../entities/user.entity";

export class RegisterUser {
  constructor(private readonly userRepository: IUserRepository) {}

  execute(firstName: string, lastName: string, cpf: string, age: number): User {
    const user = new User(firstName, lastName, cpf, age);
    return this.userRepository.createOne(user);
  }
}
