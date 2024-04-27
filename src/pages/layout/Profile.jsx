import React from 'react'
import { useSelector } from 'react-redux'
import ProfileInfo from '../../components/ProfileInfo'

const Profile = () => {
  const { theme } = useSelector(state => state.theme)
  return (
    <div data-theme={ theme } className='w-full bg-zinc-800 rounded p-2 h-full overflow-auto'>
      <ProfileInfo/> 
    </div>
  )
}

export default Profile