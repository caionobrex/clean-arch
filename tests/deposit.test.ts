import { Deposit } from "../src/domain/usecases/deposit.usecase";
import { IUserRepository } from "../src/domain/interfaces/user-repository.interface";
import UserRepository from "../src/domain/repositories/user.repository";

describe('Deposit', () => {
  let userRepository: IUserRepository;
  beforeEach(() => {
    userRepository = new UserRepository();
  });
  describe('execute', () => {
    it('should thrown an error if user doest not exist', () => {
      expect(() => new Deposit(userRepository).execute('', 20)).toThrow(Error);
    });
    it('should', () => {
      const user = userRepository.findOneByCpf('100.100.100.92');
      new Deposit(userRepository).execute('100.100.100.92', 20);
      expect(userRepository.findOneByCpf('100.100.100.92')!.balance - 20).toBe(user!.balance);
    })
  });
});
