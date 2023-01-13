import * as yup from "yup";

const toCreateUserSchema = yup.object().shape({
  userName: yup.string().required(),
  email: yup.string().email().lowercase().required(),
  password: yup.string().required(),
});

const createdUserSchema = yup.object().shape({
  userId: yup.string().uuid().required(),
  email: yup.string().email().required(),
  userName: yup.string().required(),
  createdAt: yup.string().required(),
});

const loginUserSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const toUpdateUserSchema = yup.object().shape({
  userId: yup.string().uuid().required(),
  email: yup.string().email().optional(),
  userName: yup.string().optional(),
});

const updatedUserSchema = yup.object().shape({
  userId: yup.string().uuid().required(),
  email: yup.string().email().required(),
  userName: yup.string().required(),
  updatedAt: yup.string().required(),
});

export {
  toCreateUserSchema,
  createdUserSchema,
  loginUserSchema,
  toUpdateUserSchema,
  updatedUserSchema,
};
