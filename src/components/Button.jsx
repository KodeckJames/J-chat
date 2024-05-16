import React from 'react'

const Button = () => {
  return (
    <>
      <button
        className=" bg-purple-600 text-white rounded-full py-3 px-2 mt-2 mx-12 flex justify-center ml-6 max-xl:hidden font-bold"
        title="Post"
      >
        Post
      </button>
      <a href="" title="Post">
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
