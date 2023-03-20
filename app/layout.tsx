import './globals.css'
import { Inter } from '@next/font/google'

import Sidebar from '@/components/Sidebar'
import SessionProvider from '@/components/SessionProvider'
import { getServerSession } from 'next-auth'

import Login from '@/components/Login'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import ClientPovider from '@/components/ClientPovider'
const inter = Inter({ subsets: ['latin'] })
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

    const session = await getServerSession(authOptions)
console.log('Hii')

  return (
    <html lang="en" className={inter.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SessionProvider session={session}>


      {!session ?<Login/>:(<div className="flex">
        {/* sidebar  */}
     <div className="max-w-xs overflow-y-auto min-h-screen md:min-w-[20rem] bg-gray-900">
     <Sidebar/>
     </div>
<ClientPovider/>
        <div className="flex-grow">
        {children}
        </div>


      </div>)}
      </SessionProvider>
      </body>
    </html>
  )
}
