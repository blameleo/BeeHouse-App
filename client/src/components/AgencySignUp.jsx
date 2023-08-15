import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import RegistrationButton from '../components/RegistrationButton';

function AgencySignUp() {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      type: 'agency',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await axios.post(
          'http://localhost:4000/register',
          values
        );
        alert('User is registered');
        setCookie('Email', response.data.email);
        setCookie('UserId', response.data.userId);
        setCookie('AuthToken', response.data.token);
        navigate('/agencyonboarding');
      } catch (error) {
        console.error(error);
      }
      setSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="">
        <label className="font-volkhorn" htmlFor="email">
          Email:
        </label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          className="mb-1 border p-2 w-96 border-1 border-black rounded-md"
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500">{formik.errors.email}</div>
        ) : null}

        <br />

        <label className="font-volkhorn" htmlFor="password">
          Password:
        </label>
        <br />
        <input
          name="password"
          type="password"
          id="password"
          className="mb-1 border p-2 w-96 border-1 border-black rounded-md"
          {...formik.getFieldProps('password')}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500">{formik.errors.password}</div>
        ) : null}

        <br />

        <label className="font-volkhorn" htmlFor="confirmPassword">
          Confirm Password:
        </label>
        <br />
        <input
          name="confirmPassword"
          type="password"
          id="confirmPassword"
          className="mb-1 border p-2 w-96 border-1 border-black rounded-md"
          {...formik.getFieldProps('confirmPassword')}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div className="text-red-500">{formik.errors.confirmPassword}</div>
        ) : null}

        <div className="flex justify-center mt-7">
          <RegistrationButton label="Sign up" type="submit" />
        </div>
      </div>
    </form>
  );
}

export default AgencySignUp;
