import React from 'react'
import Search from './Search'
import UserList from './UserList'

const AllUsers = () => {
  return (
    <div className='user-list py-[3px] hidden sm:flex flex-col gap-0.5'>
      <Search/>
      <UserList/>
    </div>
  )
}

export default AllUsers