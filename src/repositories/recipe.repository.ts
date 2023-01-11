import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Recipe } from "../entities";

interface IRecipeRepo {
  save: (recipe: Partial<Recipe>) => Promise<Recipe>;
  all: () => Promise<Recipe[]>;
  findOne: (payload: object) => Promise<Recipe>;
}

class RecipeRepo implements IRecipeRepo {
  private ormRepo: Repository<Recipe>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Recipe);
  }

  save = async (recipe: Partial<Recipe>) => await this.ormRepo.save(recipe);
  all = async () => await this.ormRepo.find();
  findOne = async (payload: object) => {
    return await this.ormRepo.findOneBy({ ...payload });
  };
}

export default new RecipeRepo();
