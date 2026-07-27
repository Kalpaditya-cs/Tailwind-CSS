import React from "react";

export default function SubtitleSettings() {
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
                <input type="checkbox" />
              </label>

              <label className="flex items-center justify-between bg-lime-900 px-4 py-3 text-white">
                <span>Norsk</span>
                <input type="checkbox" />
              </label>

              <label className="flex items-center justify-between bg-lime-900 px-4 py-3 text-white">
                <span>Norsk - på all tale</span>
                <input type="checkbox" defaultChecked />
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
                <input type="checkbox" defaultChecked />
              </label>

              <label className="flex items-center justify-between bg-lime-900 px-4 py-3 text-white">
                <span>Tegnspråk</span>
                <input type="checkbox" />
              </label>

              <label className="flex items-center justify-between bg-lime-900 px-4 py-3 text-white">
                <span>Syntolk</span>
                <input type="checkbox" />
              </label>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}