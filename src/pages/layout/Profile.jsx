import React from 'react'
import { useSelector } from 'react-redux'
import ProfileInfo from '../../components/ProfileInfo'
import MyPostList from '../../components/MyPostList'

const Profile = () => {
  const { theme } = useSelector(state => state.theme)
  return (
    <div data-theme={ theme } className='w-full bg-zinc-800 rounded sm:p-2 h-full overflow-auto'>
      <ProfileInfo/> 
      <MyPostList/>
    </div>
  )
}

export default Profile