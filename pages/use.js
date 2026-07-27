import Head from "next/head";
import { useState, useEffect } from "react";

export default function CheckoutPage() {
  // =======================
  // useState
  // =======================
  const [cardType, setCardType] = useState("Credit Card");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("Jan");
  const [year, setYear] = useState("2026");
  const [cvv, setCvv] = useState("");
  const [cardHolder, setCardHolder] = useState("");

  // =======================
  // useEffect
  // Runs whenever any value changes
  // =======================
  useEffect(() => {
    console.log("Form Updated");

    console.log({
      cardType,
      cardNumber,
      month,
      year,
      cvv,
      cardHolder,
    });
  }, [cardType, cardNumber, month, year, cvv, cardHolder]);

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>

      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-8 font-sans">

        <div className="max-w-6xl w-full bg-[#eb6f6f] rounded-3xl flex flex-col md:flex-row shadow-2xl p-2">

          {/* LEFT SIDE */}
          <div className="w-full md:w-[55%] bg-white rounded-2xl p-8 sm:p-10 shadow-sm">

            <h2 className="text-2xl font-extrabold text-gray-800 mb-8">
              Payment Details
            </h2>

            <form className="space-y-6">

              {/* Card Type */}
              <div className="flex flex-col">
                <label className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">
                  Card Type
                </label>

                <select
                  value={cardType}
                  onChange={(e) => setCardType(e.target.value)}
                  className="border-b-2 border-gray-200 py-2 text-gray-700 outline-none focus:border-[#E54B4B] bg-transparent font-medium cursor-pointer"
                >
                  <option>Credit Card</option>
                  <option>Debit Card</option>
                </select>
              </div>

              {/* Card Number */}
              <div className="flex flex-col">
                <label className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">
                  Card Number
                </label>

                <input
                  type="text"
                  placeholder="1234 5678 9011 1213"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="border-b-2 border-gray-200 py-2 text-gray-700 outline-none focus:border-[#E54B4B] bg-transparent font-medium placeholder-gray-300"
                />
              </div>

              {/* Month / Year / CVV */}
              <div className="grid grid-cols-3 gap-6">

                {/* Month */}
                <div className="flex flex-col">
                  <label className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">
                    Month
                  </label>

                  <select
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    className="border-b-2 border-gray-200 py-2 text-gray-700 outline-none focus:border-[#E54B4B] bg-transparent font-medium cursor-pointer"
                  >
                    <option>Jan</option>
                    <option>Feb</option>
                    <option>Mar</option>
                  </select>
                </div>

                {/* Year */}
                <div className="flex flex-col">
                  <label className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">
                    Year
                  </label>

                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="border-b-2 border-gray-200 py-2 text-gray-700 outline-none focus:border-[#E54B4B] bg-transparent font-medium cursor-pointer"
                  >
                    <option>2026</option>
                    <option>2027</option>
                    <option>2028</option>
                  </select>
                </div>

                {/* CVV */}
                <div className="flex flex-col">
                  <label className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">
                    CVV
                  </label>

                  <input
                    type="password"
                    placeholder="•••"
                    maxLength={3}
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    className="border-b-2 border-gray-200 py-2 text-gray-700 outline-none focus:border-[#E54B4B] bg-transparent font-medium tracking-widest placeholder-gray-300"
                  />
                </div>

              </div>

              {/* Cardholder Name */}
              <div className="flex flex-col">
                <label className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">
                  Cardholder Name
                </label>

                <input
                  type="text"
                  placeholder="Ghaith Ali"
                  value={cardHolder}
                  onChange={(e) => setCardHolder(e.target.value)}
                  className="border-b-2 border-gray-200 py-2 text-gray-700 outline-none focus:border-[#E54B4B] bg-transparent font-medium placeholder-gray-300"
                />
              </div>

              {/* Button */}
              <div className="pt-6">
                <button
                  type="button"
                  onClick={() =>
                    alert(
                      `Card Type: ${cardType}
Card Number: ${cardNumber}
Month: ${month}
Year: ${year}
CVV: ${cvv}
Card Holder: ${cardHolder}`
                    )
                  }
                  className="bg-[#E54B4B] hover:bg-red-600 text-white font-bold py-3 px-10 rounded-md shadow-lg transition-transform transform hover:-translate-y-1"
                >
                  Pay $99.99
                </button>
              </div>

            </form>

          </div>

          {/* RIGHT SIDE */}
          <div className="w-full md:w-[45%] p-8 sm:p-10 flex flex-col justify-between text-white relative">

            <div className="flex-1 flex items-center justify-center py-6">
              <img
                src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=400&q=80"
                alt="Headphones"
                className="w-56 h-56 object-cover rounded-2xl shadow-2xl"
              />
            </div>

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
    </>
  );
}