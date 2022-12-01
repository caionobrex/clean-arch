import User from "../src/domain/entities/user.entity";
import { IUserRepository } from "../src/domain/interfaces/user-repository.interface";
import UserRepository from "../src/domain/repositories/user.repository";

enum pixKeyTypesEnum {
  EMAIL = 'EMAIL',
  PHONE = 'PHONE',
  CPF = 'CPF',
}

interface PixKey {
  type: pixKeyTypesEnum
  value: string
  owner: User
}

interface IPixKeysRepository {
  findOneByPixKey(pixKey: string): PixKey | null
}

class InMemoryPixKeysRepository implements IPixKeysRepository {
  findOneByPixKey(pixKey: string): PixKey | null {
    return null
  }
}

class PixTransfer {
  constructor(
    private readonly pixKeysRepository: IPixKeysRepository,
    private readonly userRepository: IUserRepository
  ) {}

  execute(from: string, pixKey: string, value: number) {
    const key: PixKey | null = this.pixKeysRepository.findOneByPixKey(pixKey);
    if (!key) throw new Error('Pix key does not exists.');
    const fromUser = this.userRepository.findOneByCpf(from);
    key.owner.balance += value;
    this.userRepository.updateOne(key.owner.cpf, key.owner);
  }
}

describe('PixTransfer', () => {
  describe('execute', () => {
    const pixKeysRepository = new InMemoryPixKeysRepository();
    const userRepository = new UserRepository();
    it ('should thrown an error if pix key doest not exists', () => {
      const userRepository: IUserRepository = new UserRepository();
      const fromUser = userRepository.findOneByCpf('');
      const pixKey = 'caionobrex@gmail.com';
      expect(() => new PixTransfer(pixKeysRepository, userRepository).execute('', pixKey , 200)).toThrow(Error);
    });
  });
});
