import { ICryptoService } from "../../domain/interfaces/crypto-service.interface";
import * as bcrypt from 'bcryptjs'

// this service deals with hashing

export class CryptoService implements ICryptoService {
  generateHash(value: string): string {
    return bcrypt.hashSync(value, 8)
  }

  compare(plainValue: any, hash: string): boolean {
    return bcrypt.compareSync(plainValue, hash);
  }
}