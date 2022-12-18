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

  @OneToMany(() => Production, (production) => production.recipeProduction)
  productions: Production[];

  @ManyToMany(
    () => RecipeIngredient,
    (recipeIngredient) => recipeIngredient.recipes
  )
  recipeIngredient: RecipeIngredient[];

  @ManyToMany(
    () => RecipeProduction,
    (recipeProduction) => recipeProduction.recipes
  )
  recipeProduction: RecipeProduction[];
}
