import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  CreateDateColumn,
  OneToMany,
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

  @OneToMany(
    () => RecipeProduction,
    (recipeProduction) => recipeProduction.recipe
  )
  recipeProductions: RecipeProduction[];
}
