import React from 'react';

const Textarea = ({ value, onChange }) => {
  return (
    <textarea
      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 h-80"
      value={value}
      onChange={onChange}
    />
  );
};

export default Textarea;
