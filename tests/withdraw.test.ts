import Withdraw from '../src/domain/usecases/withdraw.usecase';
import UserRepository from '../src/domain/repositories/user.repository';
import { IUserRepository } from '../src/domain/interfaces/user-repository.interface';
import User from '../src/domain/entities/user.entity';

describe('Withdraw', () => {
  let userRepository: IUserRepository;
  beforeEach(() => {
    userRepository = new UserRepository();
  });
  describe('execute', () => {
    it('should thrown an error if withdraw value is greater than user balance', () => {
      expect(() => new Withdraw(userRepository).execute(20, '100.100.100.92')).toThrow(Error);
    });
    it('should withdraw', () => {
      const withdrawValue = 20;
      jest.spyOn(userRepository, 'findOneByCpf').mockImplementation(() => new User('Caio', 'Nobre', '100.100.100.92', 18, 1000))
      new Withdraw(userRepository).execute(withdrawValue, '100.100.100.92')
      expect(userRepository.findOneByCpf('100.100.100.92')!.balance - withdrawValue).toBe(980);
    });
  });
});