// Import necessary modules
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import Image from "next/image";

// Define component props
type Props = {};

// Define metadata for the page
export const metadata: Metadata = {
  title: "Register", // Update the title
  description: "Created By Niroyan",
};

// Define the register page component
const RegisterPage = (props: Props) => {
  return (
    <section
      className="fixed inset-0 z-[2000] flex min-h-screen w-full flex-col overflow-y-auto lg:flex-row"
      suppressHydrationWarning>
      {/* Left section with logo and text */}
      <div className="flex min-h-[10rem] w-full items-center justify-center bg-primary text-skin-base drop-shadow lg:h-full lg:w-1/4 lg:rounded-r-lg">
        <div className="flex flex-col justify-center items-center">
          <Image src="/dummy-logo.png" width="500" height="50" alt="img logo" />
          <h1 className="text-4xl font-bold text-skin-base">lorem</h1>
        </div>
      </div>

      {/* Right section for registration form */}
      <div className="flex min-h-[calc(100vh-10rem)] w-full flex-1 flex-col items-center justify-center bg-skin-dark p-4 lg:h-full lg:w-3/4">
        <form
          action=""
          className="flex h-min w-full max-w-xl flex-col items-center justify-center gap-5 rounded-lg bg-skin-fill p-5 text-skin-base drop-shadow-lg">
          <div className="flex flex-col w-full">
            <span className="font-medium text-left text-[14px]">
              Welcome to Lorem
            </span>
            <h1 className="text-4xl font-bold">Create a new account</h1>
          </div>

          {/* Registration form fields */}
          <div className="label-box-1">
            <label htmlFor="fullName" className="label-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="John Doe"
              className="input-1"
            />
          </div>

          <div className="label-box-1">
            <label htmlFor="email" className="label-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="john@gmail.com"
              className="input-1"
            />
          </div>

          <div className="label-box-1">
            <label htmlFor="password" className="label-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="input-1"
            />
          </div>

          {/* Additional registration fields can be added as needed */}

          <div className="flex w-full flex-col items-stretch gap-[1rem] sm:w-auto sm:flex-row sm:items-center">
            <button type="submit" className="btn-register">
              Login
            </button>
            <button type="submit" className=" btn-submit">
              Register
            </button>
          </div>
        </form>

        {/* Additional content (e.g., terms and conditions) */}
        <div className="mt-6 max-w-xl text-center text-gray-600 lg:absolute lg:bottom-5 lg:w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          quaerat voluptas numquam quas tempore non nostrum magnam suscipit vero
          ad!
        </div>
      </div>
    </section>
  );
};

// Export the register page component
export default RegisterPage;
