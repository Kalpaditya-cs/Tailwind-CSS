import React, { useState, useEffect } from "react";

export default function SubtitleSettings() {
    const[under, setUnder] = useState({
        Av: "",
        Norsk: "",
        Norskpa: ""
    })

     const[til, setTil] = useState({
        Avs: "",
        Teg: "",
        Syntolk: ""
    })
  return (
    <div className="relative min-h-screen">

      {/* STEP 1 : Background Image */}
      <img
        src="/laptop.png"
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* STEP 2 : Dark Overlay */}
      <div className="absolute inset-0 bg-black/70">
      {/* "/" is used in color mixing */}
      </div>  

      {/* STEP 3 : Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">

        {/* STEP 4 : Two Columns */}
        <div className="flex gap-20">

          {/* LEFT COLUMN */}
          <div className="w-72">

            <h2 className="mb-5 text-xl text-white">
              Undertekster
            </h2>

            <div className="space-y-3">
             {/* span is used to make seperation in btw text & checkbox */}
              <label className="flex items-center justify-between bg-lime-900 px-4 py-3 text-white">
                <span>Av</span>  
                <input type="checkbox" 
                value={under.Av}
                onChange={(e) => setUnder({...under, Av: e.target.value})}/>
              </label>

              <label className="flex items-center justify-between bg-lime-900 px-4 py-3 text-white">
                <span>Norsk</span>
                <input type="checkbox"
                value={under.Norsk}
                onChange={(e) => setUnder({...under, Norsk: e.target.value})} />
              </label>

              <label className="flex items-center justify-between bg-lime-900 px-4 py-3 text-white">
                <span>Norsk - på all tale</span>
                <input type="checkbox" 
                value={under.Norskpa}
                onChange={(e) => setUnder({...under, Norskpa: e.target.value})}/>
              </label>

            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-72">

            <h2 className="mb-5 text-xl text-white">
              Tilgjengelighet
            </h2>

            <div className="space-y-3">

              <label className="flex items-center justify-between bg-lime-900 px-4 py-3 text-white">
                <span>Av</span>
                <input type="checkbox" 
                value={til.Avs}
                onChange={(e) => setTil({...til, Avs: e.target.value})} />
              </label>

              <label className="flex items-center justify-between bg-lime-900 px-4 py-3 text-white">
                <span>Tegnspråk</span>
                <input type="checkbox"
                 value={til.Teg}
                onChange={(e) => setTil({...til, Teg: e.target.value})} />
              </label>

              <label className="flex items-center justify-between bg-lime-900 px-4 py-3 text-white">
                <span>Syntolk</span>
                <input type="checkbox" 
                 value={til.Syntolk}
                onChange={(e) => setTil({...til, Syntolk: e.target.value})}/>
              </label>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}