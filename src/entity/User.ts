import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Purchase } from "./Purchase";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  userId?: string;

  @Column()
  userName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @OneToMany(() => Purchase, (purchase) => purchase.user)
  purchases: Purchase[];
}
