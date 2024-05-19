import React from 'react'

const SearchBar = () => {
  return (
    <div class="flex items-center justify-center h-screen">
      <form class="flex items-center space-x-2">
        <input
          type="search"
          placeholder="Search..."
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          class="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar
