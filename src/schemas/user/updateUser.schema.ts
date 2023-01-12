import * as yup from "yup";

const updateUserSchema = yup.object().shape({
  userId: yup.string().uuid().required(),
  userCategory: yup.string().required(),
});

const serializedUpdatedUserSchema = yup.object().shape({
  userId: yup.string().uuid().required(),
  email: yup.string().email().required(),
  userCategory: yup.string().required(),
});

export { updateUserSchema, serializedUpdatedUserSchema };
