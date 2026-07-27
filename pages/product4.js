import React from "react";

export default function Home() {
    return (
        <div className="relative min-h-screen">

            {/* =========================
          STEP 1 : Background Image
      ========================== */}
            <img
                src="/laptop.png"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* =========================
          STEP 2 : Dark Overlay
      ========================== */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* =========================
          STEP 3 : Content
      ========================== */}
            <div className="relative z-10 min-h-screen">

                {/* =========================
            Wrapper
        ========================== */}
                <div className="max-w-7xl mx-auto px-10">

                    {/* =========================
              Navbar
          ========================== */}
                    <nav className="flex justify-between items-center py-8">

                        {/* Logo */}
                        <h1 className="text-2xl font-bold text-white">
                            <span className="text-red-500">S</span>HAIF{" "}
                            <span className="text-red-500">A</span>RFAN
                        </h1>

                        {/* Menu */}
                        <ul className="flex gap-8 text-white font-semibold">
                            <li className="hover:text-red-500 cursor-pointer transition">
                                HOME
                            </li>

                            <li className="hover:text-red-500 cursor-pointer transition">
                                SERVICES
                            </li>

                            <li className="hover:text-red-500 cursor-pointer transition">
                                PROJECTS
                            </li>

                            <li className="hover:text-red-500 cursor-pointer transition">
                                ABOUT
                            </li>

                            <li className="hover:text-red-500 cursor-pointer transition">
                                CONTACT
                            </li>
                        </ul>

                    </nav>

                    {/* =========================
              Hero Section
          ========================== */}

                    <section className="flex items-center min-h-[80vh]">

                        <div className="space-y-5">

                            <h2 className="text-6xl font-bold text-white leading-tight">
                                Hello,
                                <br />
                                My Name is
                                <br />
                                <span className="text-red-500">Kal</span>
                            </h2>

                            <button className="border-2 border-red-500 text-red-500 px-8 py-3 hover:bg-red-500 hover:text-white transition duration-300">
                                PORTFOLIO
                            </button>

                        </div>

                    </section>

                </div>

            </div>

        </div>
    );
}