import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  ManyToMany,
} from "typeorm";
import { Ingredient } from "./Ingredients";
import { PurchaseIngredient } from "./PurchaseIngredient";
import { User } from "./User";

@Entity("purchases")
export class Purchase {
  @PrimaryGeneratedColumn("uuid")
  purchaseId?: string;

  @CreateDateColumn()
  purchaseDate: Date;

  @Column({ type: "float" })
  purchaseTotal: number;

  /* @OneToMany(() => Ingredient, (ingredient) => ingredient.purchase)
  ingredients: Ingredient[]; */

  @ManyToOne(() => User, (user) => user.purchases)
  user: User;

  @OneToMany(
    () => PurchaseIngredient,
    (purchaseIngredient) => purchaseIngredient.purchase
  )
  purchaseIngredients: PurchaseIngredient[];
}
