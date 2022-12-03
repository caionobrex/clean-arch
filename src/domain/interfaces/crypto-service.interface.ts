export interface ICryptoService {
  generateHash(value: string): string

  compare(plainValue: any, hash: string): boolean
}