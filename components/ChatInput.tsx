'use client'

import { db } from "@/firebase"
import { PaperAirplaneIcon } from "@heroicons/react/24/outline"
import { NoSymbolIcon} from "@heroicons/react/24/solid"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useSession } from "next-auth/react"
import { FormEvent, useState } from "react"
import toast from 'react-hot-toast';
import useSWR from 'swr'
import ModelSelection from "./ModelSelection"
type Props={
    id:string
}

const ChatInput = ({id}:Props) => {
    const [message,setMessage]=useState('')
const {data:session}=useSession()
const{data:model}=useSWR('model',{
    fallbackData:'text-davinci-003'
  })

const sendMessage=async(e: FormEvent<HTMLFormElement>)=>{
e.preventDefault()
if(!message)return
const input = message.trim()
setMessage('')
const messages:Message={
    text:input,
    createdAt:serverTimestamp(),
    user:{
_id:session?.user?.email!,
name:session?.user?.name!,
avatar:session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`
    }
}
await addDoc(collection(db,'users',session?.user?.email!,'chats',id,'messages'),messages)
const notification =toast.loading("ChatGPT is thinking...")
console.log(notification)
await fetch('/api/askQuestion/',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        prompt:input,
        chatId:id,
        model,session
    })
}).then(()=>{
toast.success('Chatgpt has responded',{
    id:notification

})
})

}
  return (
    <div className="w-full border-t  border-gray-500 p-5">
        <form onSubmit={sendMessage} className="bg-gray-500 flex  rounded">
            <input value={message
            }
            disabled={!session} type='text' className="text-gray-100 border-0 focus:outline-none bg-transparent grow p-2
            disabled:text-gray-300 disabled:cursor-not-allowed 
            " placeholder="Type your message here..."
            multiple
            onChange={(e)=>setMessage(e.target.value)}
            />
            <button className="text-white p-2  bg-gray-700 cursor-pointer disabled:bg-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed duration-300" type="submit"
            disabled={!message || !session}>
                {(!message || !session) ? <NoSymbolIcon className="w-5 h-5 text-red-400 font-black"/>:  <PaperAirplaneIcon className="w-5 h-5 -rotate-45"/>}
               
            </button>
        </form>
        <div className="md:hidden">
            <ModelSelection/>
        </div>
    </div>
  )
}

export default ChatInput