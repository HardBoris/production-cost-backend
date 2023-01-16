import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { User } from "../entities";
import { ErrorHandler } from "../errors";
import { userRepository } from "../repositories";

const userValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const decodedUser: User = await userRepository.findOne({
    userId: req.decoded.userId,
  });

  const paramsUser: User = await userRepository.findOne({
    userId: req.body.userId,
  });

  if (decodedUser.userId !== paramsUser.userId) {
    /* return res.status(401).json({
      error: {
        message: "You are not authorized to update another user.",
        name: "NotAllowedAction",
      },
    }); */
    throw new ErrorHandler(
      401,
      "You are not authorized to update another user."
    );
  } else {
    return next();
  }
};

export default userValidator;
