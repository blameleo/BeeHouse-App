import React, { useState } from "react";
import RegistrationButton from "../components/RegistrationButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import Loader from "./Loader";
import * as Yup from "yup";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

function AgencySignUp() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await axios.post(
          "https://beehouse-backend-api.onrender.com/user/register",
          {
            ...values,
            type: "agency", // Set the agency type here
          }
        );

        setCookie("Email", response.data.email);
        setCookie("UserId", response.data.userId);
        setCookie("AuthToken", response.data.token);

        if (response.status === 200) {
          setLoading(false);
          navigate("/agencyonboarding");
        }
      } catch (error) {
        setLoading(false);
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {loading ? (
          <Loader loaderStyle="w-[400px] h-[400px] flex justify-center items-center" />
        ) : (
          <div className="">
            <label className="font-volkhorn" htmlFor="">
              Email:
            </label>
            <br></br>
            <input
              type="email"
              name="email"
              className="mb-5  border p-2 w-[200px] sm:w-96  border-1 border-black rounded-md   "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Email"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500">{formik.errors.email}</p>
            )}
            <br></br>

            <label className="font-volkhorn" htmlFor="">
              Password:
            </label>
            <br></br>
            <input
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="Password"
              className="mb-5  border p-2 w-[200px] sm:w-96  border-1 border-black rounded-md  "
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500">{formik.errors.password}</p>
            )}
            <br></br>

            <label className="font-volkhorn" htmlFor="">
              Confirm Password:
            </label>
            <br></br>
            <input
              name="confirmPassword"
              type="password"
              id=""
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              placeholder="Confirm Password"
              className=" mb-5  border p-2 w-[200px] sm:w-96  border-1 border-black rounded-md  "
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <p className="text-red-500">{formik.errors.confirmPassword}</p>
              )}
            <br></br>
            <ToastContainer />

            <div className="flex justify-center mt-7">
              <RegistrationButton label="Sign up" type="submit" />
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default AgencySignUp;
