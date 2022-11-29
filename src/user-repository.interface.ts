import User from "./user.entity";

export interface IUserRepository {
  createOne(user: User): User;

  updateOne(cpf: string, user: User): User;

  findAll(): User[];

  findOneByCpf(cpf: string): User | null | undefined;
}