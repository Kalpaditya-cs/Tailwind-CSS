import React from 'react';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-blue-600 px-4 py-3 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center justify-between w-full md:w-auto gap-4">
            <img src="/flip_logo.jpg" alt="Flipkart Logo" className="w-32 h-10 object-contain" />
            <input
              type="text"
              placeholder="Search for products, brands and more"
              className="hidden sm:block bg-white px-4 py-2 rounded-lg w-64 md:w-80 text-sm focus:outline-none"
            />
          </div>

          {/* Mobile Search Bar */}
          <input
            type="text"
            placeholder="Search..."
            className="sm:hidden bg-white w-full px-4 py-2 rounded-lg text-sm focus:outline-none"
          />

          {/* Navigation */}
          <nav className="flex items-center justify-around w-full md:w-auto gap-6 text-white font-medium text-sm">
            <button className="flex items-center gap-2 hover:opacity-80">
              <img src="/login.jpg" alt="Login Icon" className="h-6 w-6 object-contain" />
              <span>Login</span>
            </button>
            <button className="flex items-center gap-2 hover:opacity-80">
              <img src="/cart.jpg" alt="Cart Icon" className="h-6 w-6 object-contain" />
              <span>Cart</span>
            </button>
            <button className="flex items-center gap-2 hover:opacity-80">
              <img src="/more.png" alt="More Icon" className="h-6 w-6 object-contain" />
              <span>More</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto p-4 space-y-8">
        {/* Banner Section */}
        <section className="bg-blue-200 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-950">Big Saving Days</h1>
            <p className="text-xl md:text-2xl font-semibold text-blue-800">50-80% OFF</p>
            <p className="text-gray-700">on Top Brands</p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img src="/sofa.jpg" alt="Featured Deal" className="max-h-64 object-cover rounded-xl shadow-sm" />
          </div>
        </section>

        {/* Top Categories */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Top Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center justify-center gap-2 text-center cursor-pointer">
              <img src="/sofa.jpg" alt="Sofa" className="w-12 h-12 object-contain" />
              <span className="text-xs font-semibold">Sofa</span>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center justify-center gap-2 text-center cursor-pointer">
              <img src="/flipkart/phone.jpeg" alt="Phone" className="w-12 h-12 object-contain" />
              <span className="text-xs font-semibold">Phone</span>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center justify-center gap-2 text-center cursor-pointer">
              <img src="/flipkart/laptop.jpg" alt="Laptop" className="w-12 h-12 object-contain" />
              <span className="text-xs font-semibold">Laptop</span>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center justify-center gap-2 text-center cursor-pointer">
              <img src="/flipkart/phone.jpeg" alt="Phone" className="w-12 h-12 object-contain" />
              <span className="text-xs font-semibold">Phone</span>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center justify-center gap-2 text-center cursor-pointer">
              <img src="/flipkart/shoes.webp" alt="Shoes" className="w-12 h-12 object-contain" />
              <span className="text-xs font-semibold">Shoes</span>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center justify-center gap-2 text-center cursor-pointer">
              <img src="/flipkart/sofa.jpg" alt="Sofa" className="w-12 h-12 object-contain" />
              <span className="text-xs font-semibold">Sofa</span>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center justify-center gap-2 text-center cursor-pointer">
              <img src="/flipkart/tshirt.jpeg" alt="Tshirt" className="w-12 h-12 object-contain" />
              <span className="text-xs font-semibold">Tshirt</span>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center justify-center gap-2 text-center cursor-pointer">
              <img src="/sofa.jpg" alt="Sofa" className="w-12 h-12 object-contain" />
              <span className="text-xs font-semibold">Sofa</span>
            </div>
          </div>
        </section>

        {/* Top Products */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Top Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center space-y-3">
              <img src="/flipkart/laptop.jpg" alt="Laptop" className="h-40 w-full object-contain" />
              <h3 className="font-semibold text-lg">Laptop</h3>
              <p className="text-blue-600 font-bold">$1000</p>
              <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition">
                Add to Cart
              </button>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center space-y-3">
              <img src="/flipkart/phone.jpeg" alt="Phone" className="h-40 w-full object-contain" />
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-blue-600 font-bold">$1000</p>
              <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition">
                Add to Cart
              </button>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center space-y-3">
              <img src="/flipkart/shoes.webp" alt="Shoes" className="h-40 w-full object-contain" />
              <h3 className="font-semibold text-lg">Shoes</h3>
              <p className="text-blue-600 font-bold">$100</p>
              <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition">
                Add to Cart
              </button>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center space-y-3">
              <img src="/sofa.jpg" alt="Sofa" className="h-40 w-full object-contain" />
              <h3 className="font-semibold text-lg">Sofa</h3>
              <p className="text-blue-600 font-bold">$500</p>
              <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition">
                Add to Cart
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-950 text-white mt-12 py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          <div className="space-y-2">
            <img src="/flip_logo.jpg" alt="Logo" className="w-32 h-10 object-contain" />
            <p className="text-xs text-gray-400">© 2026 Flipkart Clone.<br />All rights reserved.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm text-gray-300">ABOUT</h4>
            <p className="text-xs text-gray-400 hover:underline cursor-pointer">Contact Us</p>
            <p className="text-xs text-gray-400 hover:underline cursor-pointer">About Us</p>
            <p className="text-xs text-gray-400 hover:underline cursor-pointer">Careers</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm text-gray-300">HELP</h4>
            <p className="text-xs text-gray-400 hover:underline cursor-pointer">Payments</p>
            <p className="text-xs text-gray-400 hover:underline cursor-pointer">Shipping</p>
            <p className="text-xs text-gray-400 hover:underline cursor-pointer">Cancellation</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm text-gray-300">POLICY</h4>
            <p className="text-xs text-gray-400 hover:underline cursor-pointer">Return Policy</p>
            <p className="text-xs text-gray-400 hover:underline cursor-pointer">Terms Of Use</p>
            <p className="text-xs text-gray-400 hover:underline cursor-pointer">Security</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm text-gray-300">SOCIAL</h4>
            <p className="text-xs text-gray-400 hover:underline cursor-pointer">Facebook</p>
            <p className="text-xs text-gray-400 hover:underline cursor-pointer">Twitter</p>
            <p className="text-xs text-gray-400 hover:underline cursor-pointer">YouTube</p>
          </div>
        </div>
      </footer>
    </div>
  );
}