import React from 'react'

const ChatUser = ({ setOpen }) => {
  return (
    <div className='theme-bg link p-2 flex items-center justify-between' onClick={() => setOpen(true)}>
        <div className='flex gap-1.5 cursor-pointer'>
            <img className='w-12 h-12 object-cover rounded-full' src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            <div className='flex flex-col'>
                <span>@Username</span>
                <span className='italic'>Jhon Doe</span>
            </div>
        </div>
    </div>
  )
}

export default ChatUser