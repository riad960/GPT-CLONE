import { DocumentData } from "firebase/firestore"

type Props={
    message:DocumentData

}
const Message = ({message}:Props) => {
    
const isGPT = message.user.name==="CHATGPT"
  return (
  <div className={`py-5  overflow-hidden ${isGPT && 'bg-gray-500'}`}>
    <div className="flex  space-x-5 px-10 max-w-2xl mx-5">
        <img src={message?.user.avatar} alt="" className="h-8 w-8 rounded-full" />
        <p className="pt-1 text-sm">{message.text}</p>
    </div>
  </div>
  )
}

export default Message