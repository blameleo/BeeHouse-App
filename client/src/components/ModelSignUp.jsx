import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import RegistrationButton from "./RegistrationButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

function ModelSignUp() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post("http://localhost:4000/register", values);
      
      console.log(response);
      setCookie("Email", response.data.email);
      setCookie("UserId", response.data.userId);
      setCookie("AuthToken", response.data.token);
      alert("User is registered");
      // navigate("/modelonboarding");
    } catch (error) {
      console.error(error);
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className=" ">
          <label className="font-volkhorn" htmlFor="email">
            Email:
          </label>
          <br />
          <Field
            type="email"
            name="email"
            placeholder="Email"
            className="mb-1 border p-2 w-96 border-1 border-black rounded-md"
          />
          <ErrorMessage name="email" component="div" className="text-red-500 " />
          <br />

          <label className="font-volkhorn" htmlFor="password">
            Password:
          </label>
          <br />
          <Field
            type="password"
            name="password"
            placeholder="Password"
            className="mb-1 border p-2 w-96 border-1 border-black rounded-md"
          />
          <ErrorMessage name="password" component="div" className="text-red-500" />
         <br/>

          <label className="font-volkhorn" htmlFor="confirmPassword">
            Confirm Password:
          </label>
          <br />
          <Field
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="mb-1 border p-2 w-96 border-1 border-black rounded-md"
          />
          <ErrorMessage
            name="confirmPassword"
            component="div"
            className="text-red-500"
          />
          <br />

          <div className="flex justify-center mt-7">
            <RegistrationButton label="Sign up" disabled={isSubmitting} />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ModelSignUp;
