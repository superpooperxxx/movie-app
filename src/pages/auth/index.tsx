import React, { useState } from 'react';
import { useFormik } from 'formik';

// Styles
import stylesPage from './Auth.module.scss';
import stylesForm from './AuthForm.module.scss';

// Validation
import { loginValidationSchema } from './formValidation/loginValidation';
import { signupValidationSchema } from './formValidation/signupValidation';

import Input from './components/Input/Input';

const Auth: React.FC = () => {
  const [formType, setFormType] = useState<'login' | 'signup'>('login');

  const toggleFormType = () => {
    setFormType((currentFormType) =>
      currentFormType === 'login' ? 'signup' : 'login'
    );
  };

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit: () => {},
      validationSchema:
        formType === 'login' ? loginValidationSchema : signupValidationSchema,
    });

  return (
    <main className={stylesPage['auth-page']}>
      <div className={stylesPage['auth-page__form-container']}>
        <h2 className={stylesPage['auth-page__title']}>
          {formType === 'login' ? 'Login' : 'Sign Up'}
        </h2>

        <form className={stylesForm['auth-form']} onSubmit={handleSubmit}>
          <div className={stylesForm['auth-form__inputs-container']}>
            <Input
              touched={touched.email}
              error={errors.email}
              id="email"
              type="text"
              placeholder="Email address"
              value={values.email}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />

            <Input
              touched={touched.password}
              error={errors.password}
              id="password"
              type="password"
              placeholder="Password"
              value={values.password}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />

            {formType === 'signup' && (
              <Input
                touched={touched.confirmPassword}
                error={errors.confirmPassword}
                id="confirmPassword"
                type="password"
                placeholder="Repeat Password"
                value={values.confirmPassword}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            )}
          </div>

          <button className={stylesForm['auth-form__submit']}>
            {formType === 'login'
              ? 'Login to your account'
              : 'Create an account'}
          </button>
        </form>

        <p className={stylesPage['auth-page__toggle-form-text']}>
          {formType === 'login'
            ? 'Don’t have an account?'
            : 'Already have an account?'}
          <span
            className={stylesPage['auth-page__toggle-form']}
            onClick={() => toggleFormType()}
          >
            {formType === 'login' ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </div>
    </main>
  );
};

export default Auth;
