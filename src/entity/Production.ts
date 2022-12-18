import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  CreateDateColumn,
} from "typeorm";
import { RecipeProduction } from "./RecipeProduction";

@Entity("productions")
export class Production {
  @PrimaryGeneratedColumn("uuid")
  productionId?: string;

  @CreateDateColumn()
  productionDate: Date;

  @Column()
  productionQuantity: number;

  @ManyToMany(
    () => RecipeProduction,
    (recipeProduction) => recipeProduction.recipes
  )
  recipeProduction: RecipeProduction[];
}
