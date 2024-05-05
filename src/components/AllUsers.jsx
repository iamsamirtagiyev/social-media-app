import React from 'react'
import Search from './Search'
import UserList from './UserList'

const AllUsers = () => {
  return (
    <div className='theme-bg pt-2 items-center hidden sm:flex flex-col gap-0.5'>
      <Search/>
      <UserList/>
    </div>
  )
}

export default AllUsers