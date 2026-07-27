import React from 'react'
export default function Home() {
  return (
    <div className='min-h-screen bg-red-400 flex'>
      <div className='flex w-full bg-white shadow-lg m-20 mx-40 '>

        <div className='w-1/2 bg-white text-black h-100 m-6'>
          <form className='space-y-6'>
            <h1 className='font-bold text-center'>Payment Details</h1>

            <div className='flex flex-col'>
              <h1>Payment Method</h1>
              <select className='font-normal border-b'>
                <option>Select Method</option>
                <option>UPI</option>
                <option>Card</option>
                <option>Visa Card</option>
              </select>
            </div>

            <div className='flex flex-col'>
              <h1>Card Number</h1>
              <input className='border-b'
                type='number' />
            </div>

            <div className='grid grid-cols-3 gap-6'>

              <div className='flex flex-col'>
                <label>Month</label>
                <select className='font-normal border-b'>
                  <option>Select</option>
                  <option>Jan</option>
                  <option>Feb</option>
                  <option>Mar</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label>Year</label>
                <input className='border-b'
                  type='Number'
                  placeholder='Year' />
              </div>

              <div className='flex flex-col'>
                <label>CVV</label>
                <input className='border-b'
                  type='password'
                  inputMode="numeric"
                  maxLength={3} />
              </div>

            </div>
            <div className='Flex flex-col'>
              <h1>Card Holder Name</h1>
              <input className='border-b'
                type='text' />
            </div>

            <div className='flex flex-col'>
              <button className='text-white text-xl font-bold border w-50  rounded-2xl p-2 bg-red-400 hover:bg-red-500'>Pay Now</button>
            </div>
          </form>

        </div>
        <div className='w-1/2  flex flex-col items-center justify-center m-5 '>
          <img className='h-80 w-80'
            src='/headphone.jpeg' />
        </div>

      </div>
    </div>
  )
}
