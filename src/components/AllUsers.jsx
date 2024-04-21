import React from 'react'
import Search from './Search'
import UserList from './UserList'

const AllUsers = () => {
  return (
    <div className='rounded  py-[3px] hidden sm:flex flex-col gap-1.5'>
      <Search/>
      <UserList/>
    </div>
  )
}

export default AllUsers