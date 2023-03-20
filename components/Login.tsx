'use client'

import { signIn } from "next-auth/react"
import Image from "next/image"

function Login() {

  return (
    <div className="bg-[#14A27D] h-screen centered-div flex-col">
        <Image
        alt=''
        src='https://miro.medium.com/max/640/1*bf37-lAuwi6_Wx5-e5EJ1Q.jpeg'
        width={300}
        height={300}
        />
<button className="glass px-5 py-3 rounded shadow-md font-medium text-sm "
onClick={()=>signIn('google')}
>
    Sign in to use ChatGPT
</button>
    </div>
  )
}

export default Login
