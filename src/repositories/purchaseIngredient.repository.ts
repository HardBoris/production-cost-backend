import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { PurchaseIngredient } from "../entities";

interface IPIRepo {
  save: (
    purchaseIngredient: Partial<PurchaseIngredient>
  ) => Promise<PurchaseIngredient>;
  all: () => Promise<PurchaseIngredient[]>;
  findOne: (payload: object) => Promise<PurchaseIngredient>;
}

class PurchaseIngredientRepo implements IPIRepo {
  private ormRepo: Repository<PurchaseIngredient>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(PurchaseIngredient);
  }

  save = async (purchaseIngredient: Partial<PurchaseIngredient>) =>
    await this.ormRepo.save(purchaseIngredient);
  all = async () => await this.ormRepo.find();
  findOne = async (payload: object) => {
    return await this.ormRepo.findOneBy({ ...payload });
  };
}

export default new PurchaseIngredientRepo();
