import React, { useState } from "react";
import { BRAND_NAME } from "../constant";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const LogUser = () => {
  const [phone, setPhone] = useState("");
  const [toggleSignIn, setToggleSignIn] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white my-8">
      <div className="w-full max-w-sm border border-gray-300 rounded p-6 shadow-sm">
        <div className="text-center mb-6">
          <Link to="/" className="text-4xl text-red-500 cursor-pointer">
            {BRAND_NAME}
          </Link>
          <span className="text-xs text-gray-500 ml-1">.in</span>
        </div>
        <h2 className="text-lg font-medium mb-4">
          {toggleSignIn == false ? "Create account" : "Sign in"}
        </h2>

        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded text-sm focus:outline-none  focus:border-gray-500"
            />
            {toggleSignIn === false && (
              <>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile Number
                </label>
                <PhoneInput
                  country={"us"}
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  enableSearch
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: false,
                  }}
                  inputStyle={{
                    width: "100%",
                    height: "40px",
                    borderRadius: "0.375rem",
                    border: "1px solid #ccc",
                    paddingLeft: "48px",
                  }}
                  buttonStyle={{
                    borderTopLeftRadius: "0.375rem",
                    borderBottomLeftRadius: "0.375rem",
                  }}
                />

                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>

                <input
                  type="text"
                  name="address"
                  className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded text-sm focus:outline-none  focus:border-gray-500"
                />
                <div className="flex gap-2">
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>

                    <input
                      type="text"
                      name="country"
                      className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded text-sm focus:outline-none  focus:border-gray-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>

                    <input
                      type="text"
                      name="city"
                      className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded text-sm focus:outline-none  focus:border-gray-500"
                    />
                  </div>
                </div>
              </>
            )}
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
              type="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded text-sm focus:outline-none  focus:border-gray-500"
            />
            {toggleSignIn === false && (
              <>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>

                <input
                  type="cnfpassword"
                  name="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded text-sm focus:outline-none  focus:border-gray-500"
                />
              </>
            )}
          </div>

          <button className="w-full bg-red-400 hover:bg-red-500 text-white text-sm font-medium py-2 cursor-pointer rounded focus:outline-none">
            Continue
          </button>
        </form>

        {toggleSignIn == false && (
          <p className="text-xs text-gray-600 mt-4">
            By continuing, you agree to {BRAND_NAME}'s{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Conditions of Use
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Notice
            </a>
            .
          </p>
        )}

        <hr className="my-4" />

        <p className="text-sm font-semibold">
          {toggleSignIn === false
            ? "Already a member?"
            : "Don't have a account?"}
        </p>
        <a
          onClick={() => setToggleSignIn(!toggleSignIn)}
          className="text-blue-600 text-sm hover:underline cursor-pointer"
        >
          {toggleSignIn === false ? "Sign in here" : "Create a free account"}
        </a>
        <p className="text-sm font-semibold">Buying for work?</p>
        <a href="#" className="text-blue-600 text-sm hover:underline">
          Create a free business account
        </a>

        <footer className="mt-6 text-center text-xs text-gray-500 space-x-4">
          <a href="#" className="hover:underline">
            Conditions of Use
          </a>
          <a href="#" className="hover:underline">
            Privacy Notice
          </a>
          <a href="#" className="hover:underline">
            Help
          </a>
          <div className="mt-1">
            © 1996–2025, {BRAND_NAME}.com, Inc. or its affiliates
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LogUser;
