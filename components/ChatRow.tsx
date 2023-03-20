import { db } from "@/firebase"
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline"
import { collection, deleteDoc, doc, orderBy, query } from "firebase/firestore"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { useCollection } from "react-firebase-hooks/firestore"


type Props={
    id:string
}
const ChatRow = ({id}:Props) => {

    const pathname=usePathname()
    const router = useRouter()
    const{data:session}=useSession()
    const[active,setActive]=useState(false)
    const[messages]=useCollection(
       query(
        collection(db,'users',session?.user?.email!,'chats',id,'messages'),orderBy('createdAt','asc')
       )
    )
    const deleteChat =async()=>{
await deleteDoc(doc(db,'users',session?.user?.email!,'chats',id))
    }
  return (
    <Link href={`/chat/${id}`} className={`rounded-lg px-5  py-2 border-[1px] border-white/30 text-sm flex items-center justify-center space-x-3  cursor-pointer text-gray-300 transition-all hover:bg-gray-800/70 my-3`}>
   <ChatBubbleLeftIcon className="h-5 w-5 m"/>
   <p className="flex-1 hidden md:inline-flex truncate">

    {messages?.docs[messages?.docs.length-1]?.data().text || 'New Chat'}
     </p>
   <TrashIcon onClick={deleteChat} className="h-5 w-5 hover:opacity-60 transition-opacity duration-200"/>
    </Link>
  )
}

export default ChatRow
