import { Metadata } from "next";
import Link from "next/link";
import React from "react";

type Props = {};
export const metadata: Metadata = {
  title: "Login",
  description: "Created By Niroyan",
};

const page = (props: Props) => {
  return (
    <section className="w-screen h-screen flex justify-between relative">
      <div className="w-1/4 h-full bg-primary flex items-center justify-center rounded-r-lg drop-shadow">
        <h1 className="text-4xl font-bold text-white ">lorem</h1>
      </div>
      <div className="w-3/4 h-full bg-white flex items-center flex-col justify-center ">
        <form
          action=""
          className="w-1/2  h-1/2 flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col w-full">
            <span className="font-medium  text-left text-[14px]">
              Welcome to Lorem
            </span>
            <h1 className="text-4xl font-bold ">Login to your Account</h1>
          </div>

          <div className="label-box-1">
            <label htmlFor="username" className="label-1">
              Email / Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="john123/john@gmail.com"
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
              placeholder="Enter your secret password"
              className="input-1"
            />
          </div>
          <div className="flex items-center justify-between font-medium capitalize w-full">
            <div className="label-box-2">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <Link
              href="forgot_password"
              className="underline hover:text-primary transition-all cursor-pointer w-fit">
              forgot password?
            </Link>
          </div>

          <button type="submit" className="btn-primary">
            Log in
          </button>
        </form>

        <div className="absolute z-100 bottom-5 w-1/2 text-center text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          quaerat voluptas numquam quas tempore non nostrum magnam suscipit vero
          ad!
        </div>
      </div>
    </section>
  );
};

export default page;
