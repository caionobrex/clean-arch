import { IUserRepository } from "./domain/interfaces/user-repository.interface";
import User from "./domain/entities/user.entity";

interface PrismaUser {
  name: string
  phone: string
}

class PrismaClient {
  findUser(): PrismaUser {
    return {
      name: '',
      phone : '',
    }
  }
}

class UserDto {
  constructor() {}
}

export default class PrismaUserRepository implements IUserRepository {
  constructor(
    private readonly prismaClient: PrismaClient,
  ) {}

  createOne(user: User): User {
    return new User('', '', '', 10);
  }

  updateOne(cpf: string, user: User): User {
    throw new Error("Method not implemented.");
  }

  findAll(): User[] {
    return [];
  }

  findOneByCpf(cpf: string): User {
    const data = { name: '', phone: '' }
    return null
  }
}