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
      className="w-screen h-screen fixed flex z-[2000] top-0 left-0 right-0 bottom-0"
      suppressHydrationWarning>
      {/* Left section with logo and text */}
      <div className="w-1/4 h-full bg-primary flex items-center justify-center rounded-r-lg drop-shadow text-skin-base">
        <div className="flex flex-col justify-center items-center">
          <Image src="/dummy-logo.png" width="500" height="50" alt="img logo" />
          <h1 className="text-4xl font-bold text-skin-base">lorem</h1>
        </div>
      </div>

      {/* Right section for forgot password form */}
      <div className="w-3/4 h-full bg-skin-dark flex items-center flex-col justify-center">
        <form
          action=""
          className="w-1/2 h-min flex flex-col items-center justify-center gap-5 bg-skin-fill p-5 rounded-lg drop-shadow-lg text-skin-base">
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
        <div className="absolute z-100 bottom-5 w-1/2 text-center text-gray-600">
          If you need further assistance, please contact our support team.
        </div>
      </div>
    </section>
  );
};

// Export the forgot password page component
export default ForgotPasswordPage;
