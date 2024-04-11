import React from 'react'
import { useSelector } from 'react-redux'

const Messages = () => {
  const { theme } = useSelector(state => state.theme)
  return (
    <div data-theme={ theme }>Messages</div>
  )
}

export default Messages