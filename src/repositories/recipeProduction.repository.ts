import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { RecipeProduction } from "../entities";

interface IRPRepo {
  save: (
    recipeProduction: Partial<RecipeProduction>
  ) => Promise<RecipeProduction>;
  all: () => Promise<RecipeProduction[]>;
  findOne: (payload: object) => Promise<RecipeProduction>;
}

class RecipeProductionRepo implements IRPRepo {
  private ormRepo: Repository<RecipeProduction>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(RecipeProduction);
  }

  save = async (recipeProduction: Partial<RecipeProduction>) =>
    await this.ormRepo.save(recipeProduction);
  all = async () => await this.ormRepo.find();
  findOne = async (payload: object) => {
    return await this.ormRepo.findOneBy({ ...payload });
  };
}

export default new RecipeProductionRepo();
