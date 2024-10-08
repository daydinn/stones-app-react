import React, { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import { toast } from "react-toastify";
import {
  getAuth,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent");
    } catch (error) {
      toast.error("Could not send reset password");
    }
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6  font-bold ">
        {" "}
        Forgot Password{" "}
      </h1>

      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/photo-1521133573892-e44906baee46?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="key"
            className="w-full rounded-2xl"
          ></img>
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email adress"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-fuchsia-100 border-gray-300 rounded
            transition ease-in-out"
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg ">
              <p className="mb-6">
                Don't have a account{" "}
                <Link
                  to="/SignUp"
                  className="text-fuchsia-600 hover:text-fuchsia-800 transition duration-200 ease-in-out ml-1"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to="/SignIn"
                  className="text-cyan-300 hover:text-cyan-500 transition duration-200 ease-in-out ml-1"
                >
                  Sign in instead ?
                </Link>
              </p>
            </div>
            <button
              className="w-full bg-cyan-300 text-white px-7 py-3  text-sm font-medium uppercase rounded shadow-md hover:bg-cyan-500 transition duration-150 ease-in-out hover:shadow-lg active:bg-cyan-800"
              type="submit"
            >
              Send reset password
            </button>
            <div className=" flex my-4 items-center before:border-t  before:flex-1  after:border-gray-300 after:border-t  after:flex-1  ">
              <p className="text-center font-semibold mx-4 ">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
