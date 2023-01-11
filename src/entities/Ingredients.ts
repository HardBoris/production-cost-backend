import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Purchase } from "./Purchase";
import { PurchaseIngredient } from "./PurchaseIngredient";
import { RecipeIngredient } from "./RecipeIngredients";

@Entity("ingredients")
export class Ingredient {
  @PrimaryGeneratedColumn("uuid")
  ingredientId?: string;

  @Column()
  ingredientName: string;

  @Column({ nullable: true })
  description?: string;

  @Column()
  measurementUnit: string;

  /* @ManyToOne(() => Purchase, (purchase) => purchase.ingredients)
  purchase: Purchase; */

  @OneToMany(
    () => PurchaseIngredient,
    (purchaseIngredient) => purchaseIngredient.ingredient
  )
  purchaseIngredients: PurchaseIngredient[];

  @OneToMany(
    () => RecipeIngredient,
    (recipeIngredient) => recipeIngredient.ingredient
  )
  recipeIngredients: RecipeIngredient[];
}
