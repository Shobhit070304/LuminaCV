import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeftCircle } from "react-icons/fi";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-100 via-amber-50 to-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-extrabold text-amber-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-amber-800 mb-2">
          Page not found
        </h2>
        <p className="text-sm text-amber-600 mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm rounded-full transition-all"
        >
          <FiArrowLeftCircle className="mr-2 w-5 h-5" />
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
