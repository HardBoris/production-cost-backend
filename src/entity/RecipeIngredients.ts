import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Ingredient } from "./Ingredients";
import { Recipe } from "./Recipe";

@Entity("recipe_ingredients")
export class RecipeIngredient {
  @PrimaryGeneratedColumn("uuid")
  recipeIngredientId?: string;

  @Column()
  ingredientQuantity: number;

  @ManyToMany(() => Ingredient, (ingredient) => ingredient.recipeIngredients)
  ingredients: Ingredient[];

  @ManyToMany(() => Recipe, (recipe) => recipe.recipeIngredient)
  recipes: Recipe[];
}
