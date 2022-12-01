import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  cpf: string;

  @Column()
  age: number;

  @Column()
  balance: number;
}