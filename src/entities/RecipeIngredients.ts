import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import { Ingredient } from "./Ingredients";
import { Recipe } from "./Recipe";

@Entity("recipe_ingredients")
export class RecipeIngredient {
  @PrimaryGeneratedColumn("uuid")
  recipeIngredientId?: string;

  @Column()
  ingredientQuantity: number;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.recipeIngredients)
  ingredient: Ingredient;

  @ManyToOne(() => Recipe, (recipe) => recipe.recipeIngredients)
  recipe: Recipe;
}
