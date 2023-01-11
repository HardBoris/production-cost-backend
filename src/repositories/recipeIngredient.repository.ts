import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { RecipeIngredient } from "../entities";

interface IRIRepo {
  save: (
    recipeIngredient: Partial<RecipeIngredient>
  ) => Promise<RecipeIngredient>;
  all: () => Promise<RecipeIngredient[]>;
  findOne: (payload: object) => Promise<RecipeIngredient>;
}

class RecipeIngredientRepo implements IRIRepo {
  private ormRepo: Repository<RecipeIngredient>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(RecipeIngredient);
  }

  save = async (recipeIngredient: Partial<RecipeIngredient>) =>
    await this.ormRepo.save(recipeIngredient);
  all = async () => await this.ormRepo.find();
  findOne = async (payload: object) => {
    return await this.ormRepo.findOneBy({ ...payload });
  };
}

export default new RecipeIngredientRepo();
