import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const { theme } = useSelector(state => state.theme)
  return (
    <div data-theme={ theme }>Profile</div>
  )
}

export default Profile