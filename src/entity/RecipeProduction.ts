import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Production } from "./Production";
import { Recipe } from "./Recipe";

@Entity("recipe_production")
export class RecipeProduction {
  @PrimaryGeneratedColumn("uuid")
  recipeProductionId?: string;

  @Column()
  recipeQuantity: number;

  @ManyToMany(() => Production, (production) => production.recipeProduction)
  productions: Production[];

  @ManyToMany(() => Recipe, (recipe) => recipe.recipeProduction)
  recipes: Recipe[];
}
