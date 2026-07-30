import { MdOutlineDateRange } from "react-icons/md"
import { FaRegClock } from "react-icons/fa";

export default function Home() {

  return (
    <div className="min-h-screen bg-black flex">

{/* LEFT SIDE */}

      <div className="w-full bg-black p-16 pt-20" >
        <div className="space-y-4 pb-6 border-b border-gray-800">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            Automate your path to production
          </h1>
          <p className="text-gray-400 text-lg">
            Ship faster with secure, reliable CI/CD.
          </p>
          <h2 className="flex items-center gap-2 text-blue-400 hover:text-blue-300 ">
            Explore GitHub Actions
            <span className=" text-blue-400 hover:text-blue-300 ">›</span>
          </h2>
        </div>


        <div className="flex items-center justify-between pb-6 border-b border-gray-800/60 pt-6 ">


          <details>
            <summary className="flex justify-between items-center list-none font-semibold text-lg text-gray-200 hover:text-white select-none gap-84">
              <h1 className="text-xl font-bold text-gray-400 hover:text-white">Code instantly from anywhere</h1>
              <span className=" text-purple-400 text-2xl ">+</span>
            </summary>
            <p className=" text-sm leading-relaxed text-gray-400">
              Customize your development environment with the tools
            </p>
          </details>
        </div>


        <div className="flex items-center justify-between pb-6 pt-6 border-b border-gray-800 ">

          <details>
            <summary className="flex justify-between items-center list-none font-semibold text-lg text-gray-200 hover:text-white select-none gap-91">
              <h3 className="text-xl font-bold text-gray-400 hover:text-white ">
                Keep momentum on the go
              </h3>
              <span className="text-purple-400 text-2xl">+</span>
            </summary>
            <p className="mt-4 text-gray-400">
              Stay productive
            </p>
          </details>
        </div>

        <div className="flex items-center justify-between pb-6 pt-6 border-b border-gray-800 ">


          <details>
            <summary className="flex justify-between items-center list-none font-semibold text-lg text-gray-200 hover:text-white select-none gap-104">
              <h3 className="text-xl font-bold text-gray-400 hover:text-white">
                Shape your toolchain
              </h3>
              <span className="text-purple-400 text-2xl">+</span>
            </summary>
            <p className="mt-4 text-gray-400">
              Customize your development environment with the tools
            </p>
          </details>
        </div>
      </div>
      

      {/* RIGHT SIDE */}

      <div className="w-full bg-linear-to-br from-indigo-800 via-purple-400 to-teal-800 flex items-center justify-center">
        <div className="h-130 w-130 border-2  bg-gray-700 rounded-2xl ">
          <header className="flex justify-between items-center h-12 sapce-x-5 p-2 bg-gray-800 rounded-2xl">45,67 Workflow runs
            <div className="flex space-x-2">
              <button>Event<span className=" text-gray-200 hover:text-blue-300 "> ▾</span></button>
              <button>Status<span className=" text-gray-200 hover:text-blue-300 "> ▾</span></button>
              <button>Branch<span className="text-gray-200 hover:text-blue-300 "> ▾</span></button>
              <button>Actor<span className=" text-gray-200 hover:text-blue-300 "> ▾</span></button>
            </div>
          </header>
          <div className="flex flex-col items-center justify-between space-y-3 pt-6 text-black p-5">

            <div className="flex items-center justify-between pb-6 border-b border-gray-800/60 ">

              <h3 className=" font-mono text-white hover:text-gray-200 ">
                <input type="checkbox" className=" w-5 h-5 rounded-full accent-green-500 mt-1 " />
                <span className="ml-2"> Fix IE12 incompatibilities</span>
                <br /><span className="text-gray-400">Build, test and deploy #15078: pull request #239122 synchronize by mona</span>
              </h3>
              <div class="text-right text-gray-500 shrink-0 space-y-1 ml-2">
                <div className="flex items-center justify-end gap-2">
                  <MdOutlineDateRange/><span>1 hour ago</span></div>
                <div className="flex items-center justify-end gap-2">
                  <FaRegClock  />
                  <span>5m 40s</span>
                </div>
              </div>

            </div>

            <div className="flex items-center justify-between pb-6 border-b border-gray-800/60 ">
              <h3 className=" font-mono text-white hover:text-gray-200 ">
                <input type="checkbox" className=" w-5 h-5 rounded-full accent-green-500 mt-1"/>
                <span className="ml-2">Accessibility tests</span>
                <br /><span className="text-gray-400">Build, test and deploy #15078: pull request #239122 synchronize by mona</span>
              </h3>
               <div class="text-right text-gray-500 shrink-0 space-y-1 ml-2">
                <div className="flex items-center justify-end gap-2">
                  <MdOutlineDateRange/><span>1 hour ago</span></div>
                <div className="flex items-center justify-end gap-2">
                  <FaRegClock  />
                  <span>5m 40s</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pb-6 border-b border-gray-800/60 ">
              <h3 className=" font-mono text-white hover:text-gray-200">
                <input type="checkbox" className=" w-5 h-5 rounded-full accent-green-500 mt-1"/>
                <span className="ml-2">Update changelog and release notes</span>

                <br /><span className="text-gray-400">Build, test and deploy #15078: pull request #239122 synchronize by mona</span>
              </h3>
              <div class="text-right text-gray-500 shrink-0 space-y-1 ml-2">
                <div className="flex items-center justify-end gap-2">
                  <MdOutlineDateRange/><span>1 hour ago</span></div>
                <div className="flex items-center justify-end gap-2">
                  <FaRegClock  />
                  <span>5m 40s</span>
                </div>
              </div>
              </div>

            <div className="flex items-center justify-between pb-6  ">
              <h3 className=" font-mono text-white hover:text-gray-200 ">
                <input type="checkbox" className=" w-5 h-5 rounded-full accent-green-500 mt-1" />
                <span className="ml-2">Migrate to latest Storybook</span>
                <br /><span className="text-gray-400">Build, test and deploy #15078: pull request #239122 synchronize by mona</span>
              </h3>
               <div class="text-right text-gray-500 shrink-0 space-y-1 ml-2">
                <div className="flex items-center justify-end gap-2">
                  <MdOutlineDateRange/><span>1 hour ago</span></div>
                <div className="flex items-center justify-end gap-2">
                  <FaRegClock  />
                  <span>5m 40s</span>
                </div>
              </div>
              </div>


          </div>
        </div>

      </div>

    </div >
  )
}