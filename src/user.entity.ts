export default class User {
  private _firstName: string;
  private _lastName: string;
  private _cpf: string;
  private _age: number;
  private _balance: number;

  constructor(firstName: string, lastName: string, cpf: string, age: number, balance: number = 0) {
    this.firstName = firstName;
    this.lastName = lastName;
    this._cpf = cpf;
    this.age = age;
    this._balance = balance;
  }

  public set firstName(firstName: string) {
    if (firstName.length === 0) throw new Error('Name cannot be empty');
    this._firstName = firstName;
  }

  public set lastName(lastName: string) {
    if (lastName.length === 0) throw new Error('Last name cannot be empty');
    this._lastName = lastName;
  }

  public set balance(value: number) {
    this._balance = value;
  }

  public set age(age: number) {
    if (age < 18) throw new Error(`User age can't be less than 18`);
    this._age = age;
  }

  public get cpf(): string { return this._cpf; }

  public get age(): number { return this._age; }

  public get balance(): number { return this._balance; }
}