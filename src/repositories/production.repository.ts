import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Production } from "../entities";

interface IProductionRepo {
  save: (production: Partial<Production>) => Promise<Production>;
  all: () => Promise<Production[]>;
  findOne: (payload: object) => Promise<Production>;
}

class ProductionRepo implements IProductionRepo {
  private ormRepo: Repository<Production>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Production);
  }

  save = async (production: Partial<Production>) =>
    await this.ormRepo.save(production);
  all = async () => await this.ormRepo.find();
  findOne = async (payload: object) => {
    return await this.ormRepo.findOneBy({ ...payload });
  };
}

export default new ProductionRepo();
