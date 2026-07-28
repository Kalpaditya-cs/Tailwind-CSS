import { menu } from 'framer-motion/client'
import React from 'react'
import { FaBook, FaCopy, FaHome, FaLaptop, FaPen, FaTable } from 'react-icons/fa'

export default function Home() {
    const menu = [
        { name: "DASHBOARD", icon: <FaHome /> },
        { name: "TIME TABLE", icon: <FaBook /> },
        { name: "TASK", icon: <FaTable /> },
        { name: "ATTENDANCE", icon: <FaLaptop /> },
        { name: "STUDY PLAN", icon: <FaCopy /> },
        { name: "ACTIVITY", icon: <FaPen /> }
    ];

    return (
        <div className='min-h-screen bg-gray-200 flex'>

            <aside className='w-72 h-screen bg-blue-950 text-white'>
                <div className='flex md:flex p-2 pl-4 gap-2'>
                    <img className='w-9 h-9'
                        src='/globe.svg' /> <span className='font-extrabold text-2xl'>Edu Manager</span>
                </div>
                <div className='space-y-6'>
                    <div className='space-y-4'><p className='pl-6'>School Management System</p>
                        <hr className='border-gray-400' />
                    </div>

                    <div className='flex flex-col space-y-16'>

                        {menu.map((items) => (
                            <button key={items.name}
                                className='shadow-md hover:shadow-2xl flex gap-4 pl-6 items-center'>
                                {items.icon}<span>{items.name}</span></button>))}
                    </div>
                </div>
            </aside>
            <div className="flex-1 flex flex-col">

                <header className=" h-16 text-white flex items-center px-6">
                    <input
                        type="text"
                        placeholder="Search for products, brands and more"
                        className="text-black hidden sm:block bg-white px-4 py-2 rounded-lg w-64 md:w-80 text-sm focus:outline-none"
                    />
                    {/* Mobile Search Bar */}
                    <input
                        type="text"
                        placeholder="Search..."
                        className="sm:hidden bg-white w-full px-4 py-2 rounded-lg text-sm focus:outline-none"
                    />

                </header>

                <main className='flex-1 p-6 space-y-6'>

                    <div>
                        <section>
                            <h1 className='font-bold text-4xl text-black md:text'>Hi, Kal!</h1>
                            <p className='text-black text-xl md:text-xl'>Track your progess and achieve your academic goals</p>
                        </section>
                    </div>

                    <div className='grid grid-cols-4 justify-center items-center gap-3'>


                        <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition flex flex-col  gap-2  cursor-pointer">
                            <h1 className='text-black'>Course Enrolled</h1>
                            <p className='text-4xl text-black'>8</p>
                            <p className='text-black'>+2 this semester</p>
                        </div>

                        <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition flex flex-col  gap-2  cursor-pointer">
                            <h1 className='text-black'>Assignment Due</h1>
                            <p className='text-4xl text-black'>8</p>
                            <p className='text-black'>+2 this semester</p>
                        </div>

                        <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition flex flex-col  gap-2  cursor-pointer">
                            <h1 className='text-black'>Attendance</h1>
                            <p className='text-4xl text-black'>8</p>
                            <p className='text-black'>+2 this semester</p>
                        </div>

                        <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition flex flex-col  gap-2  cursor-pointer">
                            <h1 className='text-black'>Average Grade</h1>
                            <p className='text-4xl text-black'>8</p>
                            <p className='text-black'>+2 this semester</p>
                        </div>

                    </div>

                    <div className='grid grid-cols-2 justify-center items-center gap-20'>
                        <div className='flex flex-col bg-white p-4 rounded-xl'>
                            <h1 className='text-black text-xl'>Today's Schedule</h1>
                        </div>

                        <div className='flex flex-col bg-white p-4 rounded-xl'>
                            <h1 className='text-black text-xl'>Recent Activities</h1>
                        </div>
                    </div>

                </main>
            </div>
        </div>
    )
}
