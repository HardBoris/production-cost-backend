import { Request } from "express";
import { sign } from "jsonwebtoken";
import { User } from "../entities";
import { userRepository } from "../repositories";
import { AssertsShape } from "yup/lib/object";
import { hash } from "bcrypt";
import { createdUserSchema, updatedUserSchema } from "../schemas/user.schema";
import * as dotenv from "dotenv";
dotenv.config();

interface ILogin {
  status: number;
  message: object;
}

class UserService {
  createUser = async ({ validated }: Request): Promise<AssertsShape<any>> => {
    validated.password = await hash(validated.password, 10);
    const user: User = await userRepository.save(validated);
    return await createdUserSchema.validate(user, {
      stripUnknown: true,
    });
  };

  loaderUser = async (req: Request) => {
    const users: User[] = await userRepository.all();
    return {
      status: 200,
      users: users,
    };
  };

  loginUser = async ({ validated }: Request): Promise<ILogin> => {
    console.log(validated);
    const user: User = await userRepository.findOne({
      email: validated.email,
    });

    if (!user) {
      return {
        status: 401,
        message: { message: "Invalid credentials" },
      };
    }

    if (!(await user.comparePwd(validated.password))) {
      return {
        status: 401,
        message: { message: "Invalid credentials" },
      };
    }

    const token: string = sign({ ...user }, process.env.SECRET_KEY, {
      expiresIn: process.env.EXPIRES_IN,
    });

    return {
      status: 200,
      message: { user: user, token },
    };
  };

  updateUser = async ({ validated }: Request) => {
    const user: User = await userRepository.findOne({
      userId: validated.userId,
    });
    // user.userCategory = validated.userCategory;
    Object.keys(validated).forEach((key) => {
      if (validated[key]) {
        user[key] = validated[key];
      }
    });
    // user.updatedAt = Date.now();
    const userUpdate = await userRepository.save(user);
    return await updatedUserSchema.validate(userUpdate, {
      stripUnknown: true,
    });
  };

  deleteUser = async ({ validated }: Request) => {
    const user: User = await userRepository.findOne({
      userId: validated.userId,
    });
    await userRepository.elimina(user);
  };
}

export default new UserService();
