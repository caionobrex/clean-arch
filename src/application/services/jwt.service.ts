import { IJwtService } from "../../domain/interfaces/jwt-service.interface";
import * as jwt from 'jsonwebtoken'

const secretKey = 'secret key'

export class JwtService implements IJwtService {
  sign(payload: any): string {
    return jwt.sign(payload, secretKey);
  }
  
  verify(token: string): any {
    try {
      return jwt.verify(token, secretKey)
    } catch (err) {
      throw err;
    }
  }
}
