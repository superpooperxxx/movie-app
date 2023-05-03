import * as Yup from 'yup';

export const signupValidationSchema = Yup.object().shape({
  email: Yup.string().email('Is not valid').required("Can't be empty"),
  password: Yup.string().min(8, 'Min 8 characters').required("Can't be empty"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Passwords must match')
    .required("Can't be empty"),
});
