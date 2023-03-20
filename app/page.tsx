import Image from 'next/image'

import styles from './page.module.css'
import { SunIcon,BoltIcon,ExclamationTriangleIcon } from '@heroicons/react/24/outline'




export default function Home() {
  return (
    <div className="bg-gray-700 text-white flex flex-col items-center justify-center min-h-screen px-2 md:px-4 ">
        <h1 className="text-5xl font-bold mb-20 mt-10">ChatGpt</h1>
        {/* grid container  */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 text-center'>
            {/* flex container  */}
            <div className=" mb-5">
                <div className="flex flex-col sm:flex-row items-center justify-center mb-5 ">
                    {/* sun icon  */}
                <SunIcon className='h-8 w-8'/>
                    <h2 className="ml-2 text-lg  ">Examples</h2>

                </div>
                <div className="space-y-2">
                    <p className="bg-gray-600 p-4 rounded-md text-sm shadow hover:bg-gray-800 duration-300 cursor-pointer hover:shadow-inner">"Explain quantum computing in simple terms" →</p>
                    <p className="bg-gray-600 p-4 rounded-md text-sm shadow hover:bg-gray-800 duration-300 cursor-pointer hover:shadow-inner">"Got any creative ideas for a 10 year old’s birthday?" →</p>
                    <p className="bg-gray-600 p-4 rounded-md text-sm shadow hover:bg-gray-800 duration-300 cursor-pointer hover:shadow-inner">"How do I make an HTTP request in Javascript?" →</p>
                </div>
            </div>
            {/* flex container  ends */}
            {/* flex container  */}
            <div className="mb-5">
                <div className="flex flex-col sm:flex-row items-center justify-center mb-5 ">
                    {/* sun icon  */}
                <BoltIcon className='h-8 w-8'/>
                    <h2 className="ml-2 text-lg ">Capabilities</h2>

                </div>
                <div className="space-y-2">
                    <p className="bg-gray-600 p-4 rounded-md text-sm shadow hover:bg-gray-800 duration-300 cursor-pointer hover:shadow-inner">Remembers what user said earlier in the conversation</p>
                    <p className="bg-gray-600 p-4 rounded-md text-sm shadow hover:bg-gray-800 duration-300 cursor-pointer hover:shadow-inner">
                    Allows user to provide follow-up corrections
                    </p>
                    <p className="bg-gray-600 p-4 rounded-md text-sm shadow hover:bg-gray-800 duration-300 cursor-pointer hover:shadow-inner">Trained to decline inappropriate requests</p>
                </div>
            </div>
            {/* flex container  ends */}
            {/* flex container  */}
            <div className="mb-5">
                <div className="flex flex-col sm:flex-row items-center justify-center mb-5 ">
                    {/* sun icon  */}
                <ExclamationTriangleIcon className='h-8 w-8'/>
                    <h2 className="ml-2 text-lg ">Limitations</h2>

                </div>
                <div className="space-y-2">
                    <p className="bg-gray-600 p-4 rounded-md text-sm shadow hover:bg-gray-800 duration-300 cursor-pointer hover:shadow-inner">May occasionally generate incorrect information</p>
                    <p className="bg-gray-600 p-4 rounded-md text-sm shadow hover:bg-gray-800 duration-300 cursor-pointer hover:shadow-inner">May occasionally produce harmful instructions or biased content</p>
                    <p className="bg-gray-600 p-4 rounded-md text-sm shadow hover:bg-gray-800 duration-300 cursor-pointer hover:shadow-inner">Limited knowledge of world and events after 2021</p>
                </div>
            </div>
            {/* flex container  ends */}
        </div>
        {/* grid container ends  */}
    </div>
  )
}
