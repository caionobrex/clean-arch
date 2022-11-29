import { Deposit } from "../src/deposit.usecase";
import { IUserRepository } from "../src/user-repository.interface";
import UserRepository from "../src/user.repository";

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
      const user = userRepository.findOneByCpf('073.374.603.92');
      new Deposit(userRepository).execute('073.374.603.92', 20);
      expect(userRepository.findOneByCpf('073.374.603.92')!.balance - 20).toBe(user!.balance);
    })
  });
});
