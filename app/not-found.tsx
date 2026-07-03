import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <section className="flex min-h-[24rem] w-full flex-1 items-center justify-center bg-skin-medium p-4">
      <div className="rounded-lg bg-skin-light p-6 text-center shadow-md text-skin-primary">
        <FaExclamationTriangle className=" mb-4" size={64} />
        <h1 className="text-2xl font-bold mb-2 ">Page Not Found</h1>
        <p className="text-skin-base">
          Sorry, the page you are looking for might be in another castle.
        </p>
      </div>
    </section>
  );
};

export default NotFound;
