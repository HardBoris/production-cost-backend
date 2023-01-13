import { Router } from "express";
import { userController } from "../controllers";
// import categoryValidator from "../middlewares/categoryValidator.middleware";
// import ownerValidator from "../middlewares/ownerValidator.middleware";
// import tokenValidator from "../middlewares/tokenValidator.middleware";
// import validadeSchema from "../middlewares/validateSchema.middleware";
// import verifyUserExists from "../middlewares/verifyUserExists.middleware";
// import verifyUserNotExists from "../middlewares/verifyUserNotExists.middleware";
// import { createUserSchema } from "../schemas/user/createUser.schema";
// import loginUserSchema from "../schemas/user/loginUser.schema";
// import { updateUserSchema } from "../schemas/user/updateUser.schema";

const userRouter = Router();

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

userRouter.post(
  "/users/register",
  // validadeSchema(createUserSchema),
  // verifyUserExists,
  userController.createUser
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
