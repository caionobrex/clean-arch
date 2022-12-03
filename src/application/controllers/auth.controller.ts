import { ICryptoService } from "../../domain/interfaces/crypto-service.interface";
import { IJwtService } from "../../domain/interfaces/jwt-service.interface";
import { IUserRepository } from "../../domain/interfaces/user-repository.interface";
import { SignIn } from "../../domain/usecases/signin.usecase";
import { SignUp } from "../../domain/usecases/signup.usecase";

class SignInDto {
  constructor(
    public readonly username: string,
    public readonly password: string
  ) {}
}

class SignUpDto {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly email: string,
    public readonly cpf: string,
    public readonly age: number,
    public readonly password: string
  ) {}
}

class SignUpOutputDto {
  constructor(public readonly token: string) {}
}

class SignInOutputDto {
  constructor(public readonly token: string) {}
}

export class AuthController {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly jwtService: IJwtService,
    private readonly cryptoService: ICryptoService,
  ) {}

  signUp(signUpDto: SignUpDto): SignUpOutputDto {
    const response = new SignUp(this.userRepository, this.cryptoService, this.jwtService).execute(signUpDto.firstName, signUpDto.lastName, signUpDto.email,  signUpDto.cpf, signUpDto.password, signUpDto.age);
    return new SignUpOutputDto(response)
  }

  async signIn(signInDto: SignInDto): Promise<SignInOutputDto> {
    const response = await new SignIn(this.userRepository, this.jwtService, this.cryptoService).execute(signInDto)
    return new SignInOutputDto(response)
  }
}