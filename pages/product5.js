import React from 'react'

export default function Home() {
    return (
        <div className='bg-gray-100 min-h-screen'>


            <header className='flex justify-between items-center px-4 py-4 text-black bg-blue-600 rounded-xl sticky top-0 z-50'>
                <img src='flip_logo.jpg'
                    className='w-40 h-12' />
                <input className='bg-white rounded-xl h-12 p-2 max-w-xl
w-full'
                    type='text'
                    placeholder='Search' />

                <nav className='flex items-center justify-between gap-20'>
                    <div className='flex items-center justify-between gap-2'>

                        <img src="/login.jpg"
                            alt="Logo" className="h-10 w-auto" />


                        <button className="text-white hover:text-gray-200">
                            LOGIN
                        </button>
                    </div>

                    <div className='flex items-center justify-between gap-2'>

                        <img src="/cart.jpg"
                            alt="Logo" className="h-10 w-auto" />


                        <button className="text-white hover:text-gray-200">
                            CART
                        </button>
                    </div>

                    <div className='flex items-center justify-between gap-2'>

                        <img src="/more.png"
                            alt="Logo" className="h-10 w-auto" />


                        <button className="text-white hover:text-gray-200">
                            MORE
                        </button>
                    </div>
                </nav>
            </header>


            <section className='flex  justify-between items-center bg-blue-300 m-4  rounded-xl'>
                <div className='w-1/2'>
                    <h1>Big Saving Days</h1>
                    <p>50-80 % OFF</p>
                    <p>on Top Brands</p>
                </div>

                <div className='w-1/2'>
                    <img src='/sofa.jpg'
                        className='w-180 h-100' />
                </div>


            </section>

            <section className=' flex  m-4'>
                <h1 className='text-black'>Top Categories</h1>
                <div className='grid grid-cols-8  items-center p-6'>
                    <cards className='w-50 h-20 p-9 bg-gray-100 text-black text-center'><img src='/sofa.jpg' />sofa</cards>
                    <cards className='w-50 h-20 p-20 bg-gray-100 text-black text-center'><img src='/flipkart\phone.jpeg' />Phone</cards>
                    <cards className='w-50 h-20 p-9 bg-gray-100 text-black text-center'><img src='/flipkart\laptop.jpg' />laoptop</cards>
                    <cards className='w-50 h-20 p-20 bg-gray-100 text-black text-center'><img src='/flipkart\phone.jpeg' />phone</cards>
                    <cards className='w-50 h-20 p-9 bg-gray-100 text-black text-center'><img src='/flipkart\shoes.webp' />Shoes</cards>
                    <cards className='w-50 h-20 p-9 bg-gray-100 text-black text-center'><img src='/flipkart\sofa.jpg' />Sofa</cards>
                    <cards className='w-50 h-20 p-20 bg-gray-100 text-black text-center'><img src='/flipkart\tshirt.jpeg' />Tshirt</cards>
                    <cards className='w-50 h-20 p-9 bg-gray-100 text-black text-center'><img src='/sofa.jpg' />Sofa</cards>

                </div>
            </section>

            <section className='flex m-2 space-y-5'>
                <h1 className='text-black'>Top Products</h1>
                <div className='grid grid-cols-4 justify-center items-center gap-60'>
                    <div><cards className='w-50 h-20  bg-gray-100 text-black text-center'><img src='/flipkart\laptop.jpg' />laoptop<p>$1000</p><button className='border border-blue-500 w-45 border-double'>Add to cart</button></cards></div>
                    <div><cards className='w-50 h-20  bg-gray-100 text-black text-center'><img src='/flipkart\phone.jpeg' />phone<p>$1000</p><button className='border border-blue-500 w-45 border-double'>Add to cart</button></cards></div>
                    <div><cards className='w-50 h-20  bg-gray-100 text-black text-center'><img src='/flipkart\shoes.webp' />Shoes <p>$100</p><button className='border border-blue-500 w-45 border-double'>Add to cart</button></cards></div>
                </div>
            </section>

            <footer className='flex bg-blue-950 items-center justify-between mx-auto my-auto p-4 space-x-10'>
                <div className='space-y-4'>
                    <img src='flip_logo.jpg'
                        className='w-40 h-12' />
                    <p>2026 Flipkart clone
                        <br />
                        All rights reserved
                    </p>
                </div>
                <div>
                    <h1>CUSTOMER SERVICES</h1>
                    <p>Help Center</p>
                    <p>Track order</p>
                </div>

                <div>
                    <h1>CUSTOMER SERVICES</h1>
                    <p>Help Center</p>
                    <p>Track order</p>
                </div>

                <div>
                    <h1>CUSTOMER SERVICES</h1>
                    <p>Help Center</p>
                    <p>Track order</p>
                </div>

                <div>
                    <h1>CUSTOMER SERVICES</h1>
                    <p>Help Center</p>
                    <p>Track order</p>
                </div>
            </footer>





        </div>
    )
}
