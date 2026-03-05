import { useState } from "react";
import type { ChangeEvent } from "react";
import { Link , useNavigate } from "react-router-dom";
import type { SignupInput } from "@chitra123/common";
import axios from "axios";
import { BACKEND_URL } from "../config";


export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: ""
  });

 async function sendRequest() {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
      postInputs
    );

    const jwt = response.data;
    localStorage.setItem("token", jwt);
    navigate("/blogs");

  } catch (e) {
    alert("Error while signing up")
    // alert the user here that the request failed
  }
}
     
  return (
    <div className="h-screen flex justify-center flex-col">

      <div className="flex justify-center">
        <div className="px-10 w-96">

          {/* Heading */}
          <div className="text-3xl font-extrabold text-center">
            {type === "signin" ? "Sign in" : "Create an account"}
          </div>

          {/* Subtext */}
          <div className="text-slate-500 text-center mt-2">
            {type === "signin"
              ? "Don't have an account?"
              : "Already have an account?"
            }

            <Link
              className="pl-2 underline"
              to={type === "signin" ? "/signup" : "/signin"}
            >
              {type === "signin" ? "Sign up" : "Sign in"}
            </Link>
          </div>

          {/* Inputs */}
          <div className="pt-8 space-y-4">

            {type === "signup" && (
              <LabelledInput
                label="Name"
                placeholder="Enter your name"
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    name: e.target.value
                  })
                }}
              />
            )}

            <LabelledInput
              label="Email"
              placeholder="Enter your email"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  email: e.target.value
                })
              }}
            />

            <LabelledInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  password: e.target.value
                })
              }}
            />

          </div>

          {/* Button */}
          <button
          onClick={sendRequest}
          className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900">
            {type === "signin" ? "Sign in" : "Sign up"}
          </button>

        </div>
      </div>

    </div>
  );
};

interface LabelledInputType {
  label: string
  placeholder: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  type?: string
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
  return (
    <div>

      <label className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>

      <input
        onChange={onChange}
        type={type || "text"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
        placeholder={placeholder}
        required
      />

    </div>
  )
}