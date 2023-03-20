'use client'
import { useSession,signOut } from "next-auth/react"
import NewChat from "./NewChat"
import {  collection } from 'firebase/firestore';
import {useCollection} from 'react-firebase-hooks/firestore'
import { db } from "@/firebase"
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";
import {Bars4Icon} from '@heroicons/react/24/outline'
import { useState } from "react";
const Sidebar = () => {
    const{data}=useSession()
  const [chats,loading,error]=  useCollection(
    data && collection(db,'users',data?.user?.email!,"chats")
  )
const [active,setActive]=useState(false)
  return (
    <div className="relative ">
      <div className="fixed top-4 right-2 bg-gray-700 text-white rounded-md shadow-md">
        <button className="p-2  overflow-hidden"
        onClick={()=>setActive(!active)}
        >
          <Bars4Icon className="h-6 w-6"  />
        </button>
      </div>
      <div className={`p-2
       ${active ?'flex':'hidden'}
        flex-col h-screen  text-white min-w-[10rem] z-50 `}>
      
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
      <div className="flex flex-col sm:flex-row  mx-auto hover:opacity-60 items-center justify-between cursor-pointer  w-full py-3   rounded px-5 bg-gray-700"
      onClick={()=>signOut()}
      >
       <button className="mr-4 my-2 text-sm font-medium text-slate-200">Sign Out </button>
        <img src={data.user?.image!} alt=""
       className="h-8 w-8 rounded-full ring-2 ring-gray-400"/>

      </div>
      )}
   </div>
    </div>
  )
}

export default Sidebar
