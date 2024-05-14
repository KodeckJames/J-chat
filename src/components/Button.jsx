import React from 'react'

const Button = () => {
  return (
    <>
      <button className=" bg-purple-600 text-white rounded-3xl py-3 px-4 mt-2 mx-8 flex justify-center ml-0 max-xl:hidden">
        Post
      </button>
      <a href="">
        <span className=" xl:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9333ea"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </span>
      </a>
    </>
  )
}

export default Button
