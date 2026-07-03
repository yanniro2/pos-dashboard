import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import Image from "next/image";
type Props = {};
export const metadata: Metadata = {
  title: "Login",
  description: "Created By Niroyan",
};

const page = (props: Props) => {
  return (
    <section
      className="fixed inset-0 z-[2000] flex min-h-screen w-full flex-col overflow-y-auto lg:flex-row"
      suppressHydrationWarning>
      <div className="flex min-h-[10rem] w-full items-center justify-center bg-primary text-skin-base drop-shadow lg:h-full lg:w-1/4 lg:rounded-r-lg">
        <div className="flex flex-col justify-center items-center">
          <Image src="/dummy-logo.png" width="500" height="50" alt="img logo" />
          <h1 className="text-4xl font-bold text-skin-base ">lorem</h1>
        </div>
      </div>
      <div className="flex min-h-[calc(100vh-10rem)] w-full flex-1 flex-col items-center justify-center bg-skin-dark p-4 lg:h-full lg:w-3/4">
        <form
          action=""
          className="flex h-min w-full max-w-xl flex-col items-center justify-center gap-5 rounded-lg bg-skin-fill p-5 text-skin-base drop-shadow-lg">
          <div className="flex flex-col w-full">
            <span className="font-medium  text-left text-[14px]">
              Welcome to Lorem
            </span>
            <h1 className="text-4xl font-bold ">Login to your Account</h1>
          </div>
          <div className="label-box-1">
            <label htmlFor="locationCode" className="label-1">
              Location code
            </label>
            <input
              type="text"
              name="locationCode"
              id="locationCode"
              placeholder="Jaffna : 40000"
              className="input-1"
            />
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
          <div className="flex w-full flex-col gap-3 font-medium capitalize sm:flex-row sm:items-center sm:justify-between">
            <div className="label-box-2">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="dark:bg-gray-700"
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <Link
              href="forgot_password"
              className="underline hover:text-primary transition-all cursor-pointer w-fit">
              forgot password?
            </Link>
          </div>

          <div className="flex w-full flex-col items-stretch gap-[1rem] sm:w-auto sm:flex-row sm:items-center">
            <button type="submit" className="btn-register">
              Register
            </button>
            <button type="submit" className=" btn-submit">
              Log in
            </button>
          </div>
        </form>

        <div className="mt-6 max-w-xl text-center text-gray-600 lg:absolute lg:bottom-5 lg:w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          quaerat voluptas numquam quas tempore non nostrum magnam suscipit vero
          ad!
        </div>
      </div>
    </section>
  );
};

export default page;
