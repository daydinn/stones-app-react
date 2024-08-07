import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import OAuth from "../components/OAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const defaultPhotoURL =
    "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?w=826";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    birthDate: "",
    gender: "",
    photoURL: "",
  });
  const { name, email, password, birthDate, gender, photoURL } = formData;
  const navigate = useNavigate();

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });

      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      // Speicherung der benutzerdefinierten Attribute in Firestore
      await setDoc(doc(db, "users", user.uid), formDataCopy);
      toast.success("Sign up was successful");
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6  font-bold "> Sign Up </h1>

      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
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
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Full name"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-fuchsia-100 border-gray-300 rounded
            transition ease-in-out"
            />
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email adress"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-fuchsia-100 border-gray-300 rounded
            transition ease-in-out"
            />

            <div className="relative mb-6">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
                className="w-full px-4 py-2 text-xl text-gray-700 bg-fuchsia-100 border-gray-300 rounded
            transition ease-in-out"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  className="absolute right-3 top-3 text-xl cursor-pointer "
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
            <input
              type="date"
              id="birthDate"
              value={birthDate}
              onChange={onChange}
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-fuchsia-100 border-gray-300 rounded transition ease-in-out"
            />

            <div className="mb-6">
              <label className="mr-4">
                <input
                  type="radio"
                  name="gender"
                  id="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={onChange}
                  className="mr-2"
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  id="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={onChange}
                  className="mr-2"
                />
                Female
              </label>
            </div>

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg ">
              <p className="mb-6">
                Have an account{" "}
                <Link
                  to="/SignIn"
                  className="text-fuchsia-600 hover:text-fuchsia-800 transition duration-200 ease-in-out ml-1"
                >
                  Sign in
                </Link>
              </p>
              <p>
                <Link
                  to="/ForgotPassword"
                  className="text-cyan-300 hover:text-cyan-500 transition duration-200 ease-in-out ml-1"
                >
                  Forgot password?
                </Link>
              </p>
            </div>
            <button
              className="w-full bg-cyan-300 text-white px-7 py-3  text-sm font-medium uppercase rounded shadow-md hover:bg-cyan-500 transition duration-150 ease-in-out hover:shadow-lg active:bg-cyan-800"
              type="submit"
            >
              Sign up
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
