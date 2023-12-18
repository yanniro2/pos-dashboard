import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <section className="h-screen w-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
        <FaExclamationTriangle className="text-primary mb-4" size={64} />
        <h1 className="text-2xl font-bold mb-2 dark:text-primary">
          Page Not Found
        </h1>
        <p className="text-gray-600">
          Sorry, the page you are looking for might be in another castle.
        </p>
      </div>
    </section>
  );
};

export default NotFound;
