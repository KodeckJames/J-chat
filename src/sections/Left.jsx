import React from 'react'
import Button from '../components/Button'
// import Nav from './components/Nav'
import { useState } from 'react'

const Left = () => {
  //   const [count, setCount] = useState(0)
  //   function click() {
  //     setCount((count += 1))
  //     return count
  //   }
  return (
    <>
      <header className=" bg-black pl-4 flex flex-col min-h-screen w-[20%] max-xl:items-center ">
        <a href="">
          <img
            src="/images/logo.png
              "
            alt="logo"
            width={30}
            height={30}
            className=" rounded-full pb-4 mt-2 cursor-pointer xl:ml-11"
          />
        </a>
        <div className=" flex flex-col ">
          <a
            className=" flex hover:bg-gray-800 rounded-full p-3 hover:mr-auto xl:ml-8"
            href=""
          >
            <span title="Home" className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" />
                <path d="M9 22V12h6v10M2 10.6L12 2l10 8.6" />
              </svg>
            </span>
            <div className=" text-white mb-0 max-xl:hidden  ml-4 text-2xl">
              Home
            </div>
          </a>
          <a
            className=" flex hover:bg-gray-800 rounded-full p-3 hover:mr-auto xl:ml-8"
            href=""
          >
            <span title="Explore" className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
            <div className=" text-white mb-0 max-xl:hidden  ml-4 text-2xl">
              Explore
            </div>
          </a>
          <a
            className=" flex hover:bg-gray-800 rounded-full p-3 hover:mr-auto xl:ml-8"
            href=""
          >
            <span title="Notifications" className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path>
              </svg>
            </span>
            <div className=" text-white mb-0 max-xl:hidden  ml-4 text-2xl">
              Notifications
            </div>
          </a>
          <a
            className=" flex hover:bg-gray-800 rounded-full p-3 hover:mr-auto xl:ml-8"
            href=""
          >
            <span title="Messages" className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </span>
            <div className=" text-white mb-0 max-xl:hidden  ml-4 text-2xl">
              Messages
            </div>
          </a>
          <a
            className=" flex hover:bg-gray-800 rounded-full p-3 hover:mr-auto xl:ml-8"
            href=""
          >
            <span title="JJ" className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="4" y1="21" x2="4" y2="14"></line>
                <line x1="4" y1="10" x2="4" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12" y2="3"></line>
                <line x1="20" y1="21" x2="20" y2="16"></line>
                <line x1="20" y1="12" x2="20" y2="3"></line>
                <line x1="1" y1="14" x2="7" y2="14"></line>
                <line x1="9" y1="8" x2="15" y2="8"></line>
                <line x1="17" y1="16" x2="23" y2="16"></line>
              </svg>
            </span>
            <div className=" text-white mb-0 max-xl:hidden  ml-4 text-2xl">
              JJ
            </div>
          </a>
          <a
            className=" flex hover:bg-gray-800 rounded-full p-3 hover:mr-auto xl:ml-8"
            href=""
          >
            <span title="Lists" className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffff"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
            </span>
            <div className=" text-white mb-0 max-xl:hidden  ml-4 text-2xl">
              Lists
            </div>
          </a>
          <a
            className=" flex hover:bg-gray-800 rounded-full p-3 hover:mr-auto xl:ml-8"
            href=""
          >
            <span title="Profile" className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
                <circle cx="12" cy="10" r="3" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </span>
            <div className=" text-white mb-0 max-xl:hidden  ml-4 text-2xl">
              Profile
            </div>
          </a>
          <a
            className=" flex hover:bg-gray-800 rounded-full p-3 hover:mr-auto xl:ml-8"
            href=""
          >
            <span title="More" className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </span>
            <div className=" text-white mb-0 max-xl:hidden   text-2xl xl:ml-8">
              More
            </div>
          </a>
        </div>
        <Button />
      </header>
    </>
  )
}

export default Left
