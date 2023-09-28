import React, { useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader";

function AgencySecurity() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [loading, setLoading] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const values = {
      _id: cookies.UserId,
      oldPassword,
      newPassword,
    };

    // console.log(values);
    try {
      const response = await axios.post(
        "http://localhost:4000/profile/changepassword",
        values
      );

      if (response.status === 200) {
        setLoading(false);

        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: true,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
      // console.log(response);
    } catch (error) {
      // console.log(error.response.data.message);
      setLoading(false);

      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: true,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <section className="sm:mt-10 mt-28 pb-28">
      {loading ? (
        <Loader loaderStyle="grid place-items-center h-[100vh]" />
      ) : (
        <div className="grid place-items-center ">
          <div className=" p-6 bg-white  md:mt-0 sm:max-w-md  sm:p-8">
            <h2 className="mb-1 text-center sm:ml-[0px] text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Change Password
            </h2>
            <form onSubmit={handleSubmit} className="grid  gap-y-5">
              <div>
                <label
                  htmlFor="oldPassword"
                  className="block mb-2 text-sm  font-medium text-gray-900 "
                >
                  Old Password
                </label>
                <input
                  type="password"
                  id="oldPassword"
                  className="bg-gray-50 border border-gray-700  sm:ml-[0px]  w-[280px] sm:w-[350px] text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={oldPassword}
                  placeholder="••••••••"
                  onChange={(e) => setOldPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2  text-sm font-medium text-gray-900 "
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-700  sm:ml-[0px]  w-[280px] sm:w-[350px] text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="••••••••"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2  text-sm font-medium text-gray-900 "
                >
                  Confirm new password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  className="bg-gray-50 border border-gray-700  sm:ml-[0px]  w-[280px] sm:w-[350px] text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-center">
                <Button
                  name="Reset Password"
                  joinStyle="bg-yellow-500 p-2 rounded-lg hover:bg-purple-600 hover:text-white"
                />
              </div>
            </form>
          </div>
        </div>
      )}
      <ToastContainer />
    </section>
  );
}

export default AgencySecurity;
