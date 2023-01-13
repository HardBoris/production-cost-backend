import { Express } from "express";
import userRouter from "./user.route";

const registerRouters = (app: Express): void => {
  app.use(userRouter);
};

export default registerRouters;
