import React from 'react';

const Button = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="focus:outline-none w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 my-8"
    >
      Конвертувати в PDF
    </button>
  );
};

export default Button;
