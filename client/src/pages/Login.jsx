import React, { useState, useEffect } from "react";
import Logo from "../components/Logo";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { Audio } from "react-loader-spinner";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useFormik } from "formik";
import * as Yup from "yup";
import Popup from "../components/Popup";

export default function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [openPopup, setOpenPopup] = useState(false);

  // useEffect(() => {
  //   setInterval(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post("http://localhost:4000/user/login", {
          email: values.email,
          password: values.password,
        });

        setCookie("Email", response.data.email);
        setCookie("UserId", response.data.userId);
        setCookie("AuthToken", response.data.token);

        if (response.data.type === "model") {
          navigate("/home");
        } else if (response.data.type === "agency") {
          navigate("/agency");
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className="">
      {/* {loading ? (
        <div className="flex bg-yellow-500 justify-center h-screen items-center">
          <Audio
            height="80"
            width="80"
            radius="9"
            color="black"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />{" "}
        </div>
      ) : ( */}
      <div className="grid sm:grid-cols-3 h-screen  ">
        <div className="  h-screen col-span-2 p-2 ">
          <Link to="/">
            <Logo />
          </Link>

          <div className="flex justify-center items-center h-5/6 ">
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col justify-around h-4/6 w-10/12 sm:w-4/12"
            >
              <div>
                <h1 className="text-left font-bold text-lg mb-2">Login</h1>
                <p className="text-left text-gray-400">
                  Please enter your details
                </p>
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-sm">
                  Email
                </label>
                <input
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  className="border rounded placeholder:text-sm placeholder:pl-3"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500">{formik.errors.email}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="" className="text-sm">
                  Password
                </label>
                <input
                  placeholder="********"
                  type="password"
                  name="password"
                  className="border rounded h-8 placeholder:text-sm placeholder:pl-3"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500">{formik.errors.password}</p>
                )}
              </div>

              <a href="" className="text-xs text-right text-yellow-500">
                forgot password?
              </a>

              <Button
                name="login"
                loginStyle="bg-yellow-500 w-full rounded text-white font-bold py-2  hover:bg-purple-600"
              />

              {/* <Button
                name="Sign in with google"
                googleLoginStyle=" w-full border rounded py-1 flex justify-center items-center"
              /> */}

              <p className="text-xs text-center">
                Don't have an account?{" "}
                <a
                  onClick={() => setOpenPopup(true)}
                  className="text-yellow-500 cursor-pointer hover:text-purple-600 font-bold text-sm"
                >
                  {" "}
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>

        <div className="hidden sm:block ">
          <img
            src="/img/model1.jpg"
            alt=""
            className="w-full h-full sm:object-contain lg:object-fill "
          />
        </div>
        <Popup
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          onClose={handleClosePopup}
        ></Popup>
      </div>
    </div>
  );
}
