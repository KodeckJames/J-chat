import React from 'react'

const SearchBar = () => {
  return (
    <div className=" flex justify-start mt-1 ml-4 w-full mr-5">
      <form action="" className=" w-full mr-28">
        <input
          type="search"
          className=" bg-gray-600 flex items-start  mx-0 rounded-full px-3 py-1 justify-center w-full active:border-purple-600 border-purple-600
        "
          placeholder="Search"
        />
      </form>
    </div>
  )
}

export default SearchBar
