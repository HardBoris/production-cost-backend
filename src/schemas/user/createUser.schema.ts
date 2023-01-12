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
});

export { toCreateUserSchema, createdUserSchema };
