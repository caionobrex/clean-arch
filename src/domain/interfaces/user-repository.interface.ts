import User from "../entities/user.entity";

export interface IUserRepository {
  createOne(user: User): User;

  updateOne(cpf: string, user: User): User;

  findAll(): User[];

  findOneByCpf(cpf: string): Promise<User | null | undefined>;

  findOneById(id: number | string): Promise<User>;

  findByEmail(email: string): Promise<User>;
}