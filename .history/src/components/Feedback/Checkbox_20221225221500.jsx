import React from 'react'

const Checkbox = (value, checked) => {
  return (
    <li className="flex items-center mb-4 w-10">
    <input
      checked={checked}
      id="default-checkbox"
      type="checkbox"
      value={value}
      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
    <label
      for="default-checkbox"
      className="ml-2 text-sm font-medium text-black dark:text-gray-300"
    >
      {value}
    </label>
  </li>
  )
}

export default Checkbox