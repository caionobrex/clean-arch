import { RegisterUser } from "./src/register-user.usecase";
import UserRepository from "./src/user.repository";

function main() {
  try {
    const userRepository = new UserRepository();
    new RegisterUser(userRepository).execute('Caio', 'Nobre', '073.374.603.92', 18);
    new RegisterUser(userRepository).execute('Caio', 'Martins', '073.330.603.92', 20);
    console.log(userRepository.findAll());
  } catch (err) {
    console.log(err);
  }
}

main();