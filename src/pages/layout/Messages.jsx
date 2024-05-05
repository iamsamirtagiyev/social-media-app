import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Search from '../../components/Search'
import ChatUser from '../../components/ChatUser'
import ChatNav from '../../components/ChatNav'
import ChatInput from '../../components/ChatInput'
import ChatBox from '../../components/ChatBox'
import classNames from 'classnames'

const Messages = () => {
  const [open, setOpen] = useState(false)
  const { theme } = useSelector(state => state.theme)
  return (
    <div data-theme={ theme } className='flex w-full gap-[1px]'>
      <div className='sm:w-[30%] h-screen overflow-hidden w-full flex flex-col items-center theme-bg pt-1'>
        <Search/>
        <div className='flex flex-col mt-[1px] gap-[1px] overflow-auto h-full w-full'>
          <ChatUser setOpen={setOpen}/>
          <ChatUser setOpen={setOpen}/>
          <ChatUser setOpen={setOpen}/>
          <ChatUser setOpen={setOpen}/>
          <ChatUser setOpen={setOpen}/>
          <ChatUser setOpen={setOpen}/>
          <ChatUser setOpen={setOpen}/>
          <ChatUser setOpen={setOpen}/>
          <ChatUser setOpen={setOpen}/>
          <ChatUser setOpen={setOpen}/>
          <ChatUser setOpen={setOpen}/>
          <ChatUser setOpen={setOpen}/>
          <ChatUser setOpen={setOpen}/>
          <ChatUser setOpen={setOpen}/>
          <ChatUser setOpen={setOpen}/>
          <ChatUser setOpen={setOpen}/>
        </div>
      </div>
      <div className={classNames('sm:w-[70%] flex max-h-screen flex-col gap-[1px] sm:static absolute top-0  transition-all duration-500 w-full body p-0 z-20', {
        '-left-full': !open,
        'left-0': open
      })}>
        <ChatNav setOpen={setOpen} />
        <ChatBox/>
        <ChatInput/>
      </div>
    </div>
  )
}

export default Messages