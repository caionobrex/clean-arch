export interface IJwtService {
  sign(payload: any): string

  verify(jwt: string): any
}