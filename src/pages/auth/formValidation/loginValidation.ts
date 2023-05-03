import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email('Is not valid').required("Can't be empty"),
  password: Yup.string().min(8, 'Min 8 characters').required("Can't be empty"),
});
