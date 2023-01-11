import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
} from "typeorm";
import { Ingredient } from "./Ingredients";
import { Purchase } from "./Purchase";

@Entity("purchase_ingredient")
export class PurchaseIngredient {
  @PrimaryGeneratedColumn("uuid")
  purchaseIngredientId?: string;

  @Column()
  ingredientQuantity: number;

  @Column({ type: "float" })
  ingredientPrice: number;

  @ManyToOne(() => Purchase, (purchase) => purchase.purchaseIngredients)
  purchase: Purchase;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.purchaseIngredients)
  ingredient: Ingredient;
}
