// Import necessary modules
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import Image from "next/image";

// Define component props
type Props = {};

// Define metadata for the page
export const metadata: Metadata = {
  title: "Forgot Password", // Update the title
  description: "Created By Niroyan",
};

// Define the forgot password page component
const ForgotPasswordPage = (props: Props) => {
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

      {/* Right section for forgot password form */}
      <div className="flex min-h-[calc(100vh-10rem)] w-full flex-1 flex-col items-center justify-center bg-skin-dark p-4 lg:h-full lg:w-3/4">
        <form
          action=""
          className="flex h-min w-full max-w-xl flex-col items-center justify-center gap-5 rounded-lg bg-skin-fill p-5 text-skin-base drop-shadow-lg">
          <div className="flex flex-col w-full">
            <span className="font-medium text-left text-[14px]">
              Welcome to Lorem
            </span>
            <h1 className="text-4xl font-bold">Forgot Password</h1>
          </div>

          {/* Forgot password form field */}
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

          {/* Additional instructions or information can be added as needed */}

          <button type="submit" className="btn-submit">
            Reset Password
          </button>
        </form>

        {/* Additional content (e.g., contact support) */}
        <div className="mt-6 max-w-xl text-center text-gray-600 lg:absolute lg:bottom-5 lg:w-1/2">
          If you need further assistance, please contact our support team.
        </div>
      </div>
    </section>
  );
};

// Export the forgot password page component
export default ForgotPasswordPage;
