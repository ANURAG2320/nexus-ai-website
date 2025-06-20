import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-8 md:p-12">
        {/* Main Container - The rounded rectangle with only the light gray section */}
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl mx-auto overflow-hidden">
          {/* Left Section (Light Gray) - This is the component you requested */}
          <div className="bg-white text-black p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-10 lg:mb-12">
                Next-Gen AI Summit 2052
              </h1>

              {/* Links Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-12 mb-12 sm:mb-16">
                <div>
                  <ul className="space-y-2 text-lg sm:text-xl font-medium">
                    <li><a href="" className="hover:underline hover:text-[#0147FF] transition-colors duration-200">Agenda</a></li>
                    <li><a href="#" className="hover:underline hover:text-[#0147FF] transition-colors duration-200">Speakers</a></li>
                    <li><a href="#" className="hover:underline hover:text-[#0147FF] transition-colors duration-200">Register</a></li>
                    <li><a href="#" className="hover:underline hover:text-[#0147FF] transition-colors duration-200">Venue</a></li>
                    <li><a href="#" className="hover:underline hover:text-[#0147FF] transition-colors duration-200">FAQ</a></li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2 text-lg sm:text-xl font-medium">
                    <li><a href="#" className="hover:underline hover:text-[#0147FF] transition-colors duration-200">Terms & Conditions</a></li>
                    <li><a href="#" className="hover:underline hover:text-[#0147FF] transition-colors duration-200">Privacy Policy</a></li>
                    <li><a href="#" className="hover:underline hover:text-[#0147FF] transition-colors duration-200">Cookie Policy</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-sm sm:text-base text-gray-600 mt-8">
              &copy; 2052 Next-Gen AI Summit. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
