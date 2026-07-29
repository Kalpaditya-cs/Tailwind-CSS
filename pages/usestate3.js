import React, { useState } from 'react'

export default function Home() {

    const[form, setForm] = useState({
        FullName: "",
        Email: "",
        Password: "",
        ConfirmPass: ""
    })
  return (
    <div className='relative min-h-screen'>
        <img className='absolute inset-0 h-screen w-screen object-cover'
        src='laptop.png'
        alt='laptop'/>

        <div className='absolute inset-0 bg-black/60'></div>

        <div className='relative z-20 flex justify-center items-center min-h-screen p-4'>
            <div className='w-full max-w-md bg-white/70 rounded-lg p-6 text-black'>
            <form className='space-y-6'>
                <div className='text-center'>
                <h1 className='font-bold'>Create account</h1>
                <h2>Fill the form to create an account</h2>
                </div>

                <div>
                    <h1 className='font-bold'>Full Name</h1>
                    <input type='text'
                    placeholder='Kal Sharma'
                    value={form.FullName}
                    onChange={(e) => setForm({...form, FullName: e.target.value})}
                    className='w-80 border rounded-xl p-1 border-gray-300 hover:bg-blue-200 focus:ring-2 focus:ring-blue-500'/>
                </div>

                  <div>
                    <h1 className='font-bold'>Email address</h1>
                    <input type='text'
                    placeholder='xyz@abcd.com'
                    value={form.Email}
                    onChange={(e) => setForm({...form, Email: e.target.value})}
                    className='w-80 border rounded-xl p-1 border-gray-300 hover:bg-blue-200 focus:ring-2 focus:ring-blue-500'/>
                </div>

                  <div>
                    <h1 className='font-bold'>Password</h1>
                    <input type='password'
                    value={form.Password}
                    onChange={(e) => setForm({...form, Password: e.target.value})}
                    className='w-80 border rounded-xl p-1 border-gray-300 hover:bg-blue-200 focus:ring-2 focus:ring-blue-500'/>
                </div>

                  <div>
                    <h1 className='font-bold'>Confirm Password</h1>
                    <input type='text'
                    value={form.ConfirmPass}
                    onChange={(e) => setForm({...form, ConfirmPass: e.target.value})}
                    className='w-80 border rounded-xl p-1 border-gray-300 hover:bg-blue-200 focus:ring-2 focus:ring-blue-500'/>
                </div>

                <div>
                    <label className='flex gap-2'>
                    <input className='bg-blue-500'
                    type='checkbox'/>
                    <span>I agree to the</span>
                    <span className='text-blue-500'>terms and conditons</span>
                    </label>
                </div>
                <div className='flex justify-center items-center'>
                    <button className='text-white bg-blue-500 border rounded-xl p-1'>Create Account</button>
                </div>

                <div className='text-center'>
                <p className='font-bold'>Already have an account?
                    <span className='text-blue-500'> Login</span>
                </p>
                </div>
</form>
            </div>
        </div>
    </div>
  )
}
