import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Purchase } from "../entities";

interface IPurchaseRepo {
  save: (purchase: Partial<Purchase>) => Promise<Purchase>;
  all: () => Promise<Purchase[]>;
  findOne: (payload: object) => Promise<Purchase>;
}

class PurchaseRepo implements IPurchaseRepo {
  private ormRepo: Repository<Purchase>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Purchase);
  }

  save = async (purchase: Partial<Purchase>) =>
    await this.ormRepo.save(purchase);
  all = async () => await this.ormRepo.find();
  findOne = async (payload: object) => {
    return await this.ormRepo.findOneBy({ ...payload });
  };
}

export default new PurchaseRepo();
