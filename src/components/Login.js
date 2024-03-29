import React, { useRef, useState } from "react";
import FormValidate from "../utils/FormValidate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { adduser } from "../utils/userSlice";
import Header from "./Header";

const Login = () => {
  const [issignin, setissignin] = useState(true);
  const [errmsg, seterrmsg] = useState(null);
  const email = useRef();
  const password = useRef();
  const name = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlesignin = () => {
    setissignin(!issignin);
  };

  const handleformlogin = () => {
    const message = FormValidate(email.current.value, password.current.value);
    seterrmsg(message);
    if (message) return;
    if (!issignin) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                adduser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );

           

              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrmsg(errorCode + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;


          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrmsg(errorCode + errorMessage);
        });
    }
  };

  return (
    <>
      <Header />
      <div className="bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg)] h-[850px] brightness-[45%]  relative "></div>

      {/* <img
        className="w-[180px] absolute top-2 left-36"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      /> */}

      <div className="h-[700px] w-[430px] bg-black absolute inset-0 m-auto top-48 bg-opacity-70  text-white rounded-sm ">
        <h1 className=" text-white z-10 text-4xl mt-10 ml-16 font-bold">
          {issignin ? "Sign In" : "Sign up"}
        </h1>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col items-center mt-4 gap-2 "
        >
          {!issignin && (
            <input
              type="text"
              ref={name}
              placeholder="Enter Your Name"
              className="w-[70%] my-2 p-3 rounded-sm bg-gray-700 bg-opacity-50 border-gray-600 border-[1px]"
            />
          )}
          <input
            type="text"
            ref={email}
            placeholder="Enter email address"
            className="w-[70%] my-2 p-3 rounded-sm bg-gray-700 bg-opacity-50 border-gray-600 border-[1px]"
          />
          <input
            type="password"
            ref={password}
            placeholder="Enter password"
            className="w-[70%]  my-2 p-3 rounded-sm bg-gray-700 bg-opacity-50 border-gray-600 border-[1px]"
            autoComplete="on"
          />
          <p className="text-red-600 text-sm">{errmsg}</p>
          <button
            className="w-[70%] bg-red-600 my-2 p-2 rounded-sm"
            onClick={handleformlogin}
          >
            {" "}
            {issignin ? "Sign In" : "Sign up"}
          </button>
          <span>Or</span>
          <button className=" w-[70%] bg-gray-300 bg-opacity-30  my-2 p-2 rounded-sm ">
            Use a sign in code
          </button>

          <span>Forgot password?</span>
        </form>

        <div className="flex flex-col  mt-4 gap-3 w-[80%] items-start ml-[70px] ">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="check-box"
              className="w-4 h-7   cursor-pointer"
            />
            <label htmlFor="check-box">Remember me</label>
          </div>
          <h4 className="text-gray-400">
            New to Netflix?{" "}
            <span className="text-white cursor-pointer" onClick={handlesignin}>
              {issignin ? "Sign Up Now" : "Sign In Now"}
            </span>
          </h4>

          <p className="text-xs text-gray-400 w-[80%]">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <span className="text-blue-500 underline cursor-pointer">
              {" "}
              Learn more.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
