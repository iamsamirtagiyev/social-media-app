import React from 'react'
import Message from './Message'

const ChatBox = () => {
  return (
    <div className='user rounded overflow-auto h-full p-2 flex flex-col gap-4'>
        <Message>
            <Message.YourMessage>Salam</Message.YourMessage>
        </Message>
        <Message>
            <Message.MyMessage>Salam</Message.MyMessage>
        </Message>
        <Message>
            <Message.YourMessage>Salam</Message.YourMessage>
        </Message>
        <Message>
            <Message.MyMessage>Salam</Message.MyMessage>
        </Message>
        <Message>
            <Message.YourMessage>Salam</Message.YourMessage>
        </Message>
        <Message>
            <Message.MyMessage>Salam</Message.MyMessage>
        </Message>
    </div>
  )
}

export default ChatBox