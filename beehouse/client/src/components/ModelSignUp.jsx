import React, { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import RegistrationButton from "./RegistrationButton";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ModelSignUp() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [loading, setLoading] = useState(null);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      type: "model",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // console.log(values);
      setLoading(true);
      try {
        const response = await axios.post(
          "http://localhost:4000/user/register",
          values
        );

        // console.log(response);
        setCookie("Email", response.data.email);
        setCookie("UserId", response.data.userId);
        setCookie("AuthToken", response.data.token);

        if (response.status === 200) {
          setLoading(false);
          navigate("/modelonboarding");
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

  const handleBlur = (e) => {
    formik.handleBlur(e);
  };

  //     console.log(response);
  //     setCookie("Email", response.data.email);
  //     setCookie("UserId", response.data.userId);
  //     setCookie("AuthToken", response.data.token);
  //     // alert("User is registered");
  //     // navigate("/modelonboarding");
  //     if (response.status === 200) {
  //       setLoading(false);
  //       navigate("/modelonboarding");
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //     toast.error(error.response.data.message, {
  //       position: "top-right",
  //       autoClose: false,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "colored",
  //     });
  //   }
  // };
  return (
    <div>
      <form className=" border-black " onSubmit={formik.handleSubmit}>
        {loading ? (
          <Loader loaderStyle="w-[400px] h-[400px] flex justify-center items-center" />
        ) : (
          <div>
            <label className="font-volkhorn" htmlFor="">
              Email:
            </label>
            <br></br>
            <input
              value={formik.values.email}
              name="email"
              onBlur={handleBlur}
              onChange={formik.handleChange}
              type="email"
              placeholder="Email"
              className="mb-5  border p-2 w-64 sm:w-96  border-1 border-black rounded-md  "
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
              value={formik.values.password}
              name="password"
              onChange={formik.handleChange}
              onBlur={handleBlur}
              type="password"
              placeholder="Password"
              className="mb-5  border p-2 w-full sm:w-96  border-1 border-black rounded-md  "
            />

            <br></br>
            <label className="font-volkhorn" htmlFor="">
              Confirm Password:
            </label>
            <br></br>
            <input
              value={formik.values.confirmPassword}
              name="confirmPassword"
              onBlur={handleBlur}
              onChange={formik.handleChange}
              type="password"
              id=""
              placeholder="Confirm Password"
              className=" mb-5  border p-2 w-full sm:w-96  border-1 border-black rounded-md  "
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <p className="text-red-500">{formik.errors.confirmPassword}</p>
              )}
            <br></br>
            {/* <p className="text-center text-xs text-green-500">{info}</p> */}
            <ToastContainer />
            <div className="flex justify-center mt-7">
              <RegistrationButton label="Sign up" />
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default ModelSignUp;
