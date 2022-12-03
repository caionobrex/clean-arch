import { ICryptoService } from "../interfaces/crypto-service.interface";
import { IJwtService } from "../interfaces/jwt-service.interface";
import { IUserRepository } from "../interfaces/user-repository.interface";

export class SignIn {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly jwtService: IJwtService,
    private readonly crypto: ICryptoService,
  ) {}

  async execute({ username, password }: Required<{ username: string, password: string }>): Promise<string> {
    const user = await this.userRepository.findByEmail(username)
    if (!user) throw new Error('User not registered')
    if (!this.crypto.compare(password, user.password)) throw new Error('Password is wrong')
    return this.jwtService.sign({
      userId: user.id,
      cpf: user.cpf,
      firstName: user.firstName,
      lastName: user.lastName
    })
  }
}