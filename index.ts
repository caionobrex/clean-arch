import { RegisterUser } from "./src/register-user.usecase";
import UserRepository from "./src/user.repository";

class Controller {
  register(name: string, lastName: string, cpf: string, age: number) {
    const userRepository = new UserRepository();
    new RegisterUser(userRepository).execute('Caio', 'Nobre', '100.100.100.92', 18);
    new RegisterUser(userRepository).execute('Caio', 'Martins', '100.100.100.92', 20);
    console.log(userRepository.findAll());
  }
}

try {
  const controller = new Controller();
  if (process.argv[2] === 'register') {
    controller.register('Caio', 'Nobre', '', 30);
  }
} catch (err) {
  console.log(err);
}