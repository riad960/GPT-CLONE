'use client'
import { db } from "@/firebase";
import { PlusIcon } from "@heroicons/react/24/outline"
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation';


const NewChat = () => {
    // utils
    const router= useRouter()
const {data:session}=useSession()    // handler
    const createNewChat = async() => {
const doc=await addDoc(collection(db,'users',session?.user?.email!,'chats'),{
messages:[],
userId:session?.user?.email!,
createdAt:serverTimestamp()
})
router.push(`/chat/${doc.id}`)
    }
  return (
  <div className="rounded-lg px-5 md:px-2 py-3 border-[1px] border-white/30 text-sm flex items-center justify-center space-x-3 cursor-pointer text-gray-300 transition-all hover:bg-gray-800/70 font-semibold " onClick={createNewChat}>
    <PlusIcon className="w-4 h-4"/>
    <p className="text-xs">New Chat</p>
  </div>
  )
}

export default NewChat
