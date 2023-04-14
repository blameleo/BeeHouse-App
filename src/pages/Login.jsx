import React from "react";
import Logo from "../components/Logo";
import Button from "../components/Button";

export default function Login() {
  return (
    <div className="grid sm:grid-cols-3 h-screen  ">
      <div className="  h-screen col-span-2 p-2 ">
        <Logo />

        <div className="flex justify-center items-center h-5/6 ">
          <form className="flex flex-col justify-around h-4/6 w-10/12 sm:w-4/12">
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
                name=""
                className="border rounded placeholder:text-sm placeholder:pl-3"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="text-sm">
                Password
              </label>
              <input
                placeholder="********"
                type="password"
                name=""
                className="border rounded h-8 placeholder:text-sm placeholder:pl-3"
              />
            </div>

            <a href="" className="text-xs text-right text-yellow-500">
              forgot password?
            </a>

            <Button
              name="login"
              loginStyle="bg-yellow-500 w-full rounded text-white font-bold py-1"
            />

            <Button
              name="Sign in with google"
              googleLoginStyle=" w-full border rounded py-1 flex justify-center items-center"
            />

            <p className="text-xs text-center">
              Don't have an account?{" "}
              <a href="" className="text-yellow-500">
                {" "}
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>

      <div className="hidden sm:block ">
        <img
          src="public/img/model1.jpg"
          alt=""
          className="w-full h-full sm:object-contain lg:object-fill "
        />
      </div>
    </div>
  );
}
