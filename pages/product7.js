import React, { useState } from 'react'
import { FaHome, FaNewspaper, FaSign, FaSun } from 'react-icons/fa'
import { FaHireAHelper, FaPersonRifle } from 'react-icons/fa6'
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Bar } from 'recharts'

export default function Home() {
    const [data,setData] = useState("")

    const sidebar = [
        { name: "HOME", icon: <FaHome /> },
        { name: "NEWS", icon: <FaNewspaper /> },
        { name: "WEATHER FORECAST", icon: <FaSun /> },
        { name: "PROFILE", icon: <FaPersonRifle /> },
        { name: "SUPPORT & HELP", icon: <FaHireAHelper /> },
        { name: "LOGOUT", icon: <FaSign /> }
    ]
    return (
        <div className='min-h-screen bg-gray-200 flex'>

<header className='fixed top-0 left-0 right-0 h-16 bg-gray-100 shadow-lg z-50 flex justify-between p-2'>
                <div className='flex md:flex items-center'>
                    <img src='/globe.svg'
                        className='w-9 h-9'
                        alt='logo'
                    />
                    <h1 className='text-2xl font-bold text-blue-400 ml-2'>Weathero</h1>
                </div>
                <nav className='flex md:flex items-center gap-5'>
                    <img src='vercel.svg'
                        className='w-9 h-9' />
                    <h1 className='font-sans text-black'>Hi, Kal</h1>
                    <img src='window.svg'
                        className='w-9 h-9'
                        alt='profile' />
                </nav>
            </header>

            <div className='flex pt-16'>

   <aside className='w-64 h-screen bg-gray-100 text-black shadow-2xl  '>
                    <div className='flex flex-col space-y-12'>{sidebar.map((items) =>
                        <button key={items.name}
                            className='flex items-center gap-2  p-4 w-64 hover:shadow-2xl  focus:shadow-2xl rounded-xl focus:text-blue-400'>
                            {items.icon}<span>{items.name}</span>
                        </button>)}
                        </div>
                </aside>

            <main className='flex-1 p-6'>
                <section className='pl-6'>
                <h1 className='space-x-10 text-xl font-serif'>
                <button className='text-black focus:text-blue-400 focus:border-b-2'>Today</button>
                <button className='text-black focus:text-blue-400 focus:border-b-2'>Week</button>
                </h1>
                </section>

                <section className='flex mt-8 p-2 shadow-xl bg-gray-100 rounded-2xl text-black space-x-10 items-center justify-between'>
                    <img src='globe.svg'
                    className='w-50 h-50 shadow-2xl'/>
                    <div className='flex justify-between space-x-70'>
                    <h1 className='text-2xl p-2 text-center'>31' C 
                        <br/><span>Partly Clouds</span>
                    </h1>
                    
                    <h1 className='text-2xl  p-2 text-center'>Humidity 
                        <br/><span>85%</span>
                    </h1>

                    <h1 className='text-2xl p-2 text-center'>Wind 
                        <br/><span>10 km/h</span>
                    </h1>
                    </div>
                </section>

                <section className='mt-8 pl-6'>
                    <h1 className='font-serif text-xl text-black'>Today's Highlights</h1>
                </section>

                 <section className=" flex flex-col w-full px-6 py-10">

  <div className="flex-1 h-80 w-100 bg-white rounded-lg shadow p-4">
  </div>

  <div className="flex-1 h-80 w-100 bg-white rounded-lg shadow p-4">
  </div>
</section>

            </main>
            </div>
            


        </div>
    )
}
