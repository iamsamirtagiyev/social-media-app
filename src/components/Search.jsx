import React from 'react'
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className='search-bg w-full flex rounded'>
        <input type="text" className='w-full text-xl font-medium px-3 py-2 border-0 outline-0 bg-transparent' placeholder='Search...' />
        <button className='icon text-2xl px-2'>
            <IoSearch/>
        </button>
    </div>
  )
}

export default Search