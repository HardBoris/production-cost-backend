import { NextFunction, Request, Response } from "express";
import { JwtPayload, verify, VerifyErrors } from "jsonwebtoken";
import { User } from "../entities";
import { ErrorHandler } from "../errors";

const tokenValidator = (req: Request, res: Response, next: NextFunction) => {
  const token: string = req.headers.authorization?.split(" ")[1];

  if (!token) {
    throw new ErrorHandler(400, "Missing authorization token.");
  }

  return verify(
    token,
    process.env.SECRET_KEY,
    (err: VerifyErrors, decoded: string | JwtPayload) => {
      if (err) {
        throw new ErrorHandler(401, err.message);
      }

      req.decoded = decoded as User;

      return next();
    }
  );
};

export default tokenValidator;
