import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-6">
      <img
        src="/Resource/ErrorPage.svg"
        alt="Error Page"
        className="w-80 md:w-96 lg:w-1/3"
      />
      <h1 className="text-4xl font-bold mt-6 text-red-600">
        Oops! Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mt-4 text-center">
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>
      <button
        className="mt-[20px] border-2 px-3 py-2 text-[17px] bg-transparent border-blue-500 shadow-xl font-serif hover:bg-blue-600 hover:text-white transition-all"
        onClick={handleGoBack}
      >
        Go Back
      </button>
    </div>
  );
};

export default Error;
