import { Router } from "express";
import { userController } from "../controllers";
// import categoryValidator from "../middlewares/categoryValidator.middleware";
// import ownerValidator from "../middlewares/ownerValidator.middleware";
// import tokenValidator from "../middlewares/tokenValidator.middleware";
import validadeSchema from "../middlewares/validateSchema.middleware";
import verifyUserExists from "../middlewares/verifyUserExists.middleware";
// import verifyUserNotExists from "../middlewares/verifyUserNotExists.middleware";
import { toCreateUserSchema } from "../schemas/user.schema";
// import loginUserSchema from "../schemas/user/loginUser.schema";
// import { updateUserSchema } from "../schemas/user/updateUser.schema";

const userRouter = Router();

userRouter.post(
  "/users/register",
  validadeSchema(toCreateUserSchema),
  verifyUserExists,
  userController.createUser
);

userRouter.get(
  "/users",
  // tokenValidator,
  // ownerValidator,
  userController.loaderUser
);

userRouter.post(
  "/users/login",
  // validadeSchema(loginUserSchema),
  // verifyUserNotExists,
  userController.loginUser
);

userRouter.patch(
  "/users/updater",
  // tokenValidator,
  // categoryValidator,
  // validadeSchema(updateUserSchema),
  userController.updateUser
);

userRouter.delete("/users/delete", userController.deleteUser);

export default userRouter;
