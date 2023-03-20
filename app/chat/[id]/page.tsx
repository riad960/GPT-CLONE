import Chat from '@/components/Chat'
import ChatInput from '@/components/ChatInput'
import React from 'react'
type Props={
  params:{
    id:string
  }
}
const ChatPage = ({params:{id}}:Props) => {
  console.log(id)
  return (
    <div className="flex flex-col h-screen  bg-gray-600 text-gray-200">
      <Chat id={id}/>
      <ChatInput id={id}/>
    </div>
  )
}

export default ChatPage
