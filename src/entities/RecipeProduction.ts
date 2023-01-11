import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import { Production } from "./Production";
import { Recipe } from "./Recipe";

@Entity("recipe_production")
export class RecipeProduction {
  @PrimaryGeneratedColumn("uuid")
  recipeProductionId?: string;

  @Column()
  recipeQuantity: number;

  @ManyToOne(() => Production, (production) => production.recipeProductions)
  production: Production;

  @ManyToOne(() => Recipe, (recipe) => recipe.recipeProductions)
  recipe: Recipe;
}
