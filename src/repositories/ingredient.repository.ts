import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Ingredient } from "../entities";

interface IIngredientRepo {
  save: (ingredient: Partial<Ingredient>) => Promise<Ingredient>;
  all: () => Promise<Ingredient[]>;
  findOne: (payload: object) => Promise<Ingredient>;
}

class IngredientRepo implements IIngredientRepo {
  private ormRepo: Repository<Ingredient>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Ingredient);
  }

  save = async (ingredient: Partial<Ingredient>) =>
    await this.ormRepo.save(ingredient);
  all = async () => await this.ormRepo.find();
  findOne = async (payload: object) => {
    return await this.ormRepo.findOneBy({ ...payload });
  };
}

export default new IngredientRepo();
