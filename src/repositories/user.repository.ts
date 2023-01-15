import { DeleteResult, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";

interface IUserRepo {
  save: (user: Partial<User>) => Promise<User>;
  all: () => Promise<User[]>;
  findOne: (payload: object) => Promise<User>;
  elimina: (user: Partial<User>) => Promise<DeleteResult>;
}

class UserRepo implements IUserRepo {
  private ormRepo: Repository<User>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(User);
  }

  save = async (user: Partial<User>) => await this.ormRepo.save(user);
  all = async () => await this.ormRepo.find();
  findOne = async (payload: object) => {
    return await this.ormRepo.findOneBy({ ...payload });
  };
  elimina = async (user: Partial<User>) =>
    await this.ormRepo.delete(user.userId);
}

export default new UserRepo();
