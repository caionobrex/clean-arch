import { IUserRepository } from "../interfaces/user-repository.interface";
import User from "../entities/user.entity";
import { ICryptoService } from "../interfaces/crypto-service.interface";
import { IJwtService } from "../interfaces/jwt-service.interface";

export class SignUp {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly cryptoService: ICryptoService,
    private readonly jwtService: IJwtService,
  ) {}

  execute(firstName: string, lastName: string, email: string, cpf: string, password: string, age: number): string {
    const user = new User(1, firstName, lastName, email, cpf, age, this.cryptoService.generateHash(password));
    this.userRepository.createOne(user);
    return this.jwtService.sign({
      userId: user.id,
      cpf: user.cpf,
      firstName: user.firstName,
      lastName: user.lastName
    })
  }
}
