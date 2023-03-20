'use client'
import { useSession,signOut } from "next-auth/react"
import NewChat from "./NewChat"
import {  collection } from 'firebase/firestore';
import {useCollection} from 'react-firebase-hooks/firestore'
import { db } from "@/firebase"
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";
const Sidebar = () => {
    const{data}=useSession()
  const [chats,loading,error]=  useCollection(
    data && collection(db,'users',data?.user?.email!,"chats")
  )

  return (
    <div className="p-2 flex flex-col h-full  text-white ">
       <div className="grow">
         {/* new chat button  */}
        <div className="">
<NewChat/>
            {/* model selection  */}
            <div className="hidden sm:inline">
              <ModelSelection/>
            </div>

        </div>
        {/* new chat button ends */}
        {/* map the chat rows  */}
        <div className="">
         {
              chats?.docs.map(chat => (
                <ChatRow key={chat.id} id={chat.id}/>
               ))
         }
        </div>
       </div>
       {data &&(
       <div className="flex mx-auto hover:opacity-60 items-center justify-between cursor-pointer  w-full py-3   rounded px-5 bg-gray-700"
       onClick={()=>signOut()}
       >
        <button className="mr-4 text-sm font-medium text-slate-200">Sign Out </button>
         <img src={data.user?.image!} alt=""
        className="h-8 w-8 rounded-full ring-2 ring-gray-400"/>

       </div>
       )}
    </div>
  )
}

export default Sidebar
