import { IUserRepository } from "../../domain/interfaces/user-repository.interface";
import User from "../../domain/entities/user.entity";

export default class UserRepository implements IUserRepository {
  private readonly users: User[] = [new User(1, 'Caio', 'Nobre', '100.100.100.92', 18)];

  createOne(user: User): User {
    this.users.push(user);
    return user;
  }

  async findOneByCpf(cpf: string): Promise<User | null | undefined> {
    return this.users.find((user: User) => user.cpf === cpf);
  }

  updateOne(cpf: string, user: User): User {
    this.users.forEach((u: User) => {
      if (u.cpf === cpf) u = user;
    })
    return user;
  }
  
  findAll(): User[] {
    return this.users;
  }
}