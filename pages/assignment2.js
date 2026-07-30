import { FaGamepad, FaSearch, FaStopwatch } from "react-icons/fa";
import { useState } from "react";
export default function Home() {

     const sidebar = [
            { name: "Read" },
            { name: "Top Blog" },
            { name: "Write now" },
            { name: "Hackathons" },
            { name: "Bussiness" },
            { name: "About" },
            { name: "Setting" },
        ]
     const[side, setSide] = useState(false)   
    return (
        <div className="min-h-screen w-screen bg-green-950 flex flex-col">
            
            {/* 1st Header */}
            <header className="fixed top-0 left-0 h-18 bg-green-400 flex justify-between items-center w-full p-3">
                <div className="relative w-45 h-10 p-2 rounded-xl bg-green-900 border text-green-500 font-bold">
                    <input className=""
                        type="text"
                        placeholder="Discover anything"
                    />
                    <FaSearch className="absolute left-38 -translate-y-5" />
                </div>

                <div className="flex items-center justify-center ">
                    <FaStopwatch className="text-green-950 w-8 h-8" />
                    <h1 className=" text-green-950 text-xl font-serif font-bold">HACKERNOON</h1>
                </div>
                <nav className="flex justify-between items-center gap-5">

                    <button className="bg-green-950 text-green-600 rounded-xl h-10 pl-4 pr-4">Login</button>
                    <button className="bg-green-950 text-green-600 rounded-xl h-10 pl-4 pr-4">Signup</button>
                    <button className="bg-green-950 text-green-600 rounded-xl h-10 pl-4 pr-4">Write</button>
                    <button onClick={() => setSide(!side)} 
                    className="bg-green-950 text-green-600 rounded-xl h-10 pl-4 pr-4">=</button>
                </nav>
            </header>

            {/* Sidebar */}

            {side ? (<aside className='fixed top-0 right-0 w-64 h-screen bg-green-950 text-white shadow-2xl  '>
                    <button onClick={() => setSide(!side)} 
                    className="bg-green-950 text-green-600 rounded-xl h-10 pl-4 pr-4">=</button>
                    <div className='flex flex-col space-y-12'>{sidebar.map((items) =>
                        <button key={items.name}
                            className='flex items-center gap-2  p-4 w-64 hover:shadow-2xl  focus:shadow-2xl rounded-xl focus:text-blue-400'>
                            {items.icon}<span>{items.name}</span>
                        </button>)}
                        </div>
                </aside>): null}

            {/* 2nd Header */} 
 
            <div className="h-12 mt-18 bg-emerald-500 flex justify-center items-center w-screen p-3 font-sans">
                <nav className="flex ">
                    <button className="text-white rounded-xl h-10 pl-4 pr-4">Read</button>
                    <button className=" text-white rounded-xl h-10 pl-4 pr-4">Top Blogs</button>
                    <button className=" text-white rounded-xl h-10 pl-4 pr-4">Write Now</button>
                    <button className=" text-white rounded-xl h-10 pl-4 pr-4">Bussiness Vloging</button>
                    <button className=" text-white rounded-xl h-10 pl-4 pr-4">Hackathons</button>
                    <button className=" text-white rounded-xl h-10 pl-4 pr-4">About</button>
                    <button className=" text-white rounded-xl h-10 pl-4 pr-4">More</button>
                </nav>
            </div>


            {/* 3rd Header */}

            <div className="h-18  bg-emerald-700 flex justify-between items-center w-screen p-3  ">
                <div className="flex items-center justify-center gap-2 ml-30">
                    <FaGamepad className="text-green-950 w-20 h-20" />
                    <h1 className="font-extrabold font-stretch-90% text-emerald-400">Are you engineers mice or hawks?
                        <br /><span className="font-normal text-emerald-500">by Playerzero</span>
                    </h1>
                </div>
                <button className=" border-white border-2 text-emerald-400 rounded-xl h-13 pl-4 pr-4 mr-30">Learn More</button>
            </div>

            {/* Main Content */}

            <main className="flex">
                <div className="mt-20 ml-50 text-white "><h1 className="text-4xl text-white font-bold">How to Add Script Tags in React
                </h1>
                
                <div className="flex items-center space-x-40 mt-4"><h2 className="text-xl"> by Kaushal Joshi</h2>
                <h1><li>June 29th, 2022</li></h1></div>  

                <iframe width="600" height="315" 
                src="https://www.youtube.com/embed/oshQg1uSRvg?si=pzEn6uhgA1hEvPEb" 
                title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
                className="mt-4"></iframe>
                </div>
                <hr className="border-2 bg-green-200"/>      
            </main>
        </div>
    )
}
