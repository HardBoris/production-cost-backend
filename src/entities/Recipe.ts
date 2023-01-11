import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToMany,
} from "typeorm";
import { Production } from "./Production";
import { RecipeIngredient } from "./RecipeIngredients";
import { RecipeProduction } from "./RecipeProduction";

@Entity("recipes")
export class Recipe {
  @PrimaryGeneratedColumn("uuid")
  recipeId?: string;

  @Column()
  recipeName: string;

  @Column({ nullable: true })
  description?: string;

  /* @OneToMany(() => Production, (production) => production.recipeProduction)
  productions: Production[]; */

  @OneToMany(
    () => RecipeIngredient,
    (recipeIngredient) => recipeIngredient.recipe
  )
  recipeIngredients: RecipeIngredient[];

  @OneToMany(
    () => RecipeProduction,
    (recipeProduction) => recipeProduction.recipe
  )
  recipeProductions: RecipeProduction[];
}
