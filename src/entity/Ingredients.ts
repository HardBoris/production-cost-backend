import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
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

  @ManyToMany(
    () => PurchaseIngredient,
    (purchaseIngredient) => purchaseIngredient.ingredients
  )
  purchaseIngredients: PurchaseIngredient[];

  @ManyToMany(
    () => RecipeIngredient,
    (recipeIngredient) => recipeIngredient.ingredients
  )
  recipeIngredients: RecipeIngredient[];
}
