import { DataSource, Repository } from "typeorm";
import { UserOrmEntity } from "../entities/user.entity";
import User from "../../domain/entities/user.entity";
import { IUserRepository } from "../../domain/interfaces/user-repository.interface";

export default class DatabaseUserRepository implements IUserRepository {
  constructor(
    private readonly usersRepository: Repository<UserOrmEntity>
  ) {}

  createOne(user: User): User {
    this.usersRepository.create({})
    return new User(1, '', '', '', 2)
  }

  updateOne(cpf: string, user: User): User {
    throw new Error("Method not implemented.");
  }

  findAll(): User[] {
    return [];
  }

  async findOneByCpf(cpf: string): Promise<User> {
    const data = { name: '', phone: '' }
    const user = await this.usersRepository.findOne({ where: { id: 1 } })
    return new User(user.id, user.firstName, user.lastName, user.cpf, user.age, user.balance);
  }
}