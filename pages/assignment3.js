import { FaBars } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import { useState, useEffect } from "react";

export default function Home() {
    const [digits, setDigits] = useState([
    { id: 1, name: "Instagram", code: "115 639" },
    { id: 2, name: "Slack", code: "115 639" },
    { id: 3, name: "Google", code: "712 988" },
    { id: 4, name: "Facebook", code: "158 185" },
    { id: 5, name: "Amazon", code: "540 809" },
    { id: 6, name: "Discord", code: "796 919" },
  ])

  const TOTAL_TIME = 30

  function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

const [timeLeft, setTimeLeft] = useState(TOTAL_TIME)

// countdown and the OTP generation

 useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          // Change all OTPs
          setDigits((old) =>
            old.map((item) => ({
              ...item,
              code: generateOTP(),
            }))
          )

          return TOTAL_TIME;
        }

        return prev - 1;
      })
    }, 1000)

    return () => clearInterval(timer);
  }, [])

  // For Transition

  const rotation = (timeLeft / TOTAL_TIME) * 360

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center ">
      
      {/* CONTAINER */}
      
      <div className="flex flex-col bg-white divide-y divide-gray-300 ">
        
        {/* HEADER */}

        <header className="flex justify-between items-center h-12 space-x-12 p-1 pl-4 pr-4 ">

          <FaBars className="size-4 text-gray-600" />

          <h1 className="font-bold text-xl text-gray-600"><span className="text-blue-500">G</span><span className="text-red-500">o</span><span className="text-yellow-500">o</span><span className="text-green-500">g</span><span className="text-blue-500">l</span><span className="text-red-500">e</span> Authenticator</h1>

          <MdMoreHoriz className="size-5 text-gray-600" />
        </header>

        {/* MAIN WITH OTP */}
        
        <div className="flex flex-col divide-y divide-gray-300">
          {digits?.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center px-5 py-2  "
            >
              <div>
                <p className="text-gray-800 text-sm">{item.name}</p>

                <h2 className="text-3xl font-bold text-blue-600 mt-2  ">
                  {item.code}
                </h2>
              </div>
              <div
                className="w-12 h-12 rounded-full border-[6px] border-blue-500 border-t-transparent"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: "transform 1s linear",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
