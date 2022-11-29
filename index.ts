import { RegisterUser } from "./src/register-user.usecase";
import UserRepository from "./src/user.repository";

function main() {
  try {
    const userRepository = new UserRepository();
    new RegisterUser(userRepository).execute('Caio', 'Nobre', '100.100.100.92', 18);
    new RegisterUser(userRepository).execute('Caio', 'Martins', '100.100.100.92', 20);
    console.log(userRepository.findAll());
  } catch (err) {
    console.log(err);
  }
}

main();