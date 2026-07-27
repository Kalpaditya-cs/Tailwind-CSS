import Head from 'next/head';

export default function CheckoutPage() {
  return (
    // 1. Full Screen Background
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-8 font-sans">
      {/* 2. MAIN CARD: 'flex flex-col md:flex-row' lagane se ye left-right divide ho jayega */}
      {/* p-2 lagaya hai taaki white box ke aas paas thoda red border jaisa gap dikhe */}
      <div className="max-w-mx w-full bg-[#eb6f6f] rounded-3xl flex flex-col md:flex-row shadow-2xl p-2">
        
        {/* ========================================= */}
        {/* LEFT SIDE: FORM WALA HISA (White Box)     */}
        {/* ========================================= */}
        <div className="w-full md:w-[55%] bg-white rounded-2xl p-8 sm:p-10 shadow-sm">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-8">Payment Details</h2>

          {/* 'space-y-6' har input field ke beech me automatic barabar gap dega */}
          <form className="space-y-6">
            
            {/* Card Type Dropdown */}
            <div className="flex flex-col">
              <label className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Card Type</label>
              <select className="border-b-2 border-gray-200 py-2 text-gray-700 outline-none focus:border-[#E54B4B] bg-transparent font-medium cursor-pointer">
                <option>Credit Card</option>
                <option>Debit Card</option>
              </select>
            </div>

            {/* Card Number Input */}
            <div className="flex flex-col">
              <label className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Card Number</label>
              <input 
                type="text" 
                placeholder="1234 5678 9011 1213" 
                className="border-b-2 border-gray-200 py-2 text-gray-700 outline-none focus:border-[#E54B4B] bg-transparent font-medium placeholder-gray-300"
              />
            </div>

            {/* Expiry & CVV - Grid ka use karke 3 columns me divide kiya hai */}
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col">
                <label className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Month</label>
                <select className="border-b-2 border-gray-200 py-2 text-gray-700 outline-none focus:border-[#E54B4B] bg-transparent font-medium cursor-pointer">
                  <option>Jan</option>
                  <option>Feb</option>
                  <option>Mar</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Year</label>
                <select className="border-b-2 border-gray-200 py-2 text-gray-700 outline-none focus:border-[#E54B4B] bg-transparent font-medium cursor-pointer">
                  <option>2026</option>
                  <option>2027</option>
                  <option>2028</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">CVV</label>
                <input 
                  type="password" 
                  placeholder="•••" 
                  maxLength="3"
                  className="border-b-2 border-gray-200 py-2 text-gray-700 outline-none focus:border-[#E54B4B] bg-transparent font-medium tracking-widest placeholder-gray-300"
                />
              </div>
            </div>

            {/* Cardholder Name Input */}
            <div className="flex flex-col">
              <label className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Cardholder Name</label>
              <input 
                type="text" 
                placeholder="Ghaith Ali" 
                className="border-b-2 border-gray-200 py-2 text-gray-700 outline-none focus:border-[#E54B4B] bg-transparent font-medium placeholder-gray-300"
              />
            </div>

            {/* Pay Button */}
            <div className="pt-6">
              <button 
                type="button" 
                className="bg-[#E54B4B] hover:bg-red-600 text-white font-bold py-3 px-10 rounded-md shadow-lg transition-transform transform hover:-translate-y-1"
              >
                Pay $99.99
              </button>
            </div>
          </form>
        </div>

        {/* ========================================= */}
        {/* RIGHT SIDE: PRODUCT WALA HISA (Red Area)  */}
        {/* ========================================= */}
        <div className="w-full md:w-[45%] p-8 sm:p-10 flex flex-col justify-between text-white relative">
          
          {/* Image Section */}
          <div className="flex-1 flex items-center justify-center py-6">
            {/* Note: Dummy headphones image use ki hai. Interview me perfect look ke liye public folder me koi transparent PNG daal kar uska path de dena. */}
            <img 
              src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=400&q=80" 
              alt="Beats EP Headphones" 
              className="w-56 h-56 object-cover rounded-2xl shadow-2xl mix-blend-multiply filter contrast-125"
            />
          </div>

          {/* Text Section (Bottom me align karne ke liye 'mt-auto' use kiya hai) */}
          <div className="mt-auto text-left">
            <h3 className="text-lg font-medium text-white/90 tracking-wide">
              Beats EP On-Ear Headphones - Red
            </h3>
            <p className="text-4xl font-extrabold mt-2 tracking-tight">
              $99.99
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}