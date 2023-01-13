import { Request, Response } from "express";
import { userService } from "../services";

class UserController {
  createUser = async (req: Request, res: Response) => {
    const user = await userService.createUser(req);
    return res.status(201).json(user);
  };

  loaderUser = async (req: Request, res: Response) => {
    const { status, users } = await userService.loaderUser(req);
    return res.status(status).json(users);
  };

  loginUser = async (req: Request, res: Response) => {
    const { status, message } = await userService.loginUser(req);
    return res.status(status).json(message);
  };

  updateUser = async (req: Request, res: Response) => {
    const user = await userService.updateUser(req);
    return res.status(201).json(user);
  };

  deleteUser = async (req: Request, res: Response) => {
    const user = await userService.deleteUser(req);
    return res.status(200).json(user);
  };
}

export default new UserController();
