'use client'

import { db } from "@/firebase"
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline"
import { collection, orderBy, query } from "firebase/firestore"
import { useSession } from "next-auth/react"
import { useCollection } from "react-firebase-hooks/firestore"
import Message from "./Message"

type Props={
    id:string
}
const Chat = ({id}:Props) => {
 const {data:session}= useSession()
 const [messages]=useCollection(session && query(
  collection(db,"users",session?.user?.email!,'chats',id,'messages'),orderBy('createdAt','asc')
 ))
  return (
    <div className="grow overflow-y-auto">
      {
        messages?.empty && (
          <div className="">
            <p className="mt-10 text-center text-white text-lg">Type a prompt to get started</p>
            <ArrowDownCircleIcon className="h-10 w-10 mx-auto mt-5 animate-bounce"/>
          </div>
        )
      }
    {
      messages?.docs?.map(message=>(
        <Message key ={message.id} message={message.data()}/>
      ))
    }
    </div>
  )
}

export default Chat