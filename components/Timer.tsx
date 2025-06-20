"use client"
import React, { useState, useEffect } from 'react';

// Main App component
const Timer = () => {
  // State variables for countdown values
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  const [message, setMessage] = useState('');

  // The target end date for the countdown (e.g., 7 days from now)
  // You can modify this date to any future date you need.
  // Example: new Date("July 1, 2025 00:00:00").getTime();
  const calculateEndDate = () => {
    const now = new Date().getTime();
    return new Date(now + (7 * 24 * 60 * 60 * 1000)).getTime(); // 7 days from now
  };

  const [endDate, setEndDate] = useState(calculateEndDate());

  useEffect(() => {
    // Set up the interval for updating the countdown
    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      // Calculate time for days, hours, minutes, and seconds
      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      // Update state with new values, ensuring two digits
      setDays(String(d).padStart(2, '0'));
      setHours(String(h).padStart(2, '0'));
      setMinutes(String(m).padStart(2, '0'));
      setSeconds(String(s).padStart(2, '0'));

      // If the countdown is finished
      if (distance < 0) {
        clearInterval(countdownInterval); // Stop the interval
        setDays('00');
        setHours('00');
        setMinutes('00');
        setSeconds('00');
        setMessage('EXPIRED'); // Set an expired message
      }
    }, 1000); // Update every 1 second

    // Cleanup function: clear the interval when the component unmounts
    return () => clearInterval(countdownInterval);
  }, [endDate]); // Re-run effect if endDate changes

  return (
    // Load Tailwind CSS and Inter font within the component for self-contained immersive
    // In a real React app, these would be in public/index.html or a global CSS file.
    <>
      <script src="https://cdn.tailwindcss.com"></script>
      <style>{`
        body {
            font-family: 'Inter', sans-serif;
        }
        .decorative-element {
            width: 150px; /* Adjust size as needed */
            height: 150px;
            background: radial-gradient(circle at center, #3b82f6 0%, #1e40af 70%, transparent 100%);
            border-radius: 50%;
            animation: pulse 2s infinite alternate;
        }

        @keyframes pulse {
            from { transform: scale(0.9); opacity: 0.7; }
            to { transform: scale(1.1); opacity: 1; }
        }

        /* Responsive font sizes for the numbers for better appearance */
        .countdown-number-text { /* Renamed to avoid conflict with Tailwind's built-in font-size classes */
            font-size: 3rem; /* Default for small screens */
            line-height: 1;
        }
        @media (min-width: 640px) { /* sm */
            .countdown-number-text {
                font-size: 4rem;
            }
        }
        @media (min-width: 768px) { /* md */
            .countdown-number-text {
                font-size: 5rem;
            }
        }
        @media (min-width: 1024px) { /* lg */
            .countdown-number-text {
                font-size: 6rem;
            }
        }
        @media (min-width: 1280px) { /* xl */
            .countdown-number-text {
                font-size: 7rem; /* Similar to image */
            }
        }
      `}</style>

<div className='mt-10 mb-10'>

<div className=" text-white  sm:px-8 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-16 md:py-20 ">
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-y-8 md:gap-x-16">
          
          <div className="w-full md:w-1/2 lg:w-2/5 flex-shrink-0">
            <h1
              className="
              text-left
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] /* Responsive font size */
              font-bold
              tracking-widest
            "
            >
             REGISTER NOW
            </h1>
          </div>

          {/* Right Column: Description paragraph */}
          
          <div className="w-full md:w-1/2 lg:w-3/5 mt-4 md:mt-0">
            <p
              className="
              text-base sm:text-md md:text-lg lg:text-xl /* Responsive font size */
              text-right
              tsxt-sm
              leading-relaxed /* Improved line height for readability */
              text-white /* Slightly muted text color for description */
            "
            >
              Secure your spot at the Next-Gen AI Summit 2052 and join the future of AI innovation.
            </p>
          </div>
        </div>
      </div>

      <div>
         
        
      </div>
      






<div className='px-20 flex flex-row justify-center'>
        <div className="bg-[#1a1a1a] rounded-xl p-6 md:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between w-full max-w-4xl space-y-8 md:space-y-0 md:space-x-8">

          {/* Left Section: Text and Countdown */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-white text-sm md:text-xl font-semibold mb-6">Early Bird Pricing Ends In:</h2>

            {message ? (
              <div className="text-[#e0e0e0] text-5xl font-extrabold">{message}</div>
            ) : (
              <div className="flex space-x-4 md:space-x-8 items-end">
                <div className="flex flex-col items-center">
                  <span id="days" className="countdown-number-text font-extrabold text-[#e0e0e0]">{days}</span>
                  <span className="text-sm md:text-base uppercase text-gray-400 mt-2">DAYS</span>
                </div>
                <div className="text-white countdown-number-text font-extrabold pb-2">:</div>
                <div className="flex flex-col items-center">
                  <span id="hours" className="countdown-number-text font-extrabold text-[#e0e0e0]">{hours}</span>
                  <span className="text-sm md:text-base uppercase text-gray-400 mt-2">HOURS</span>
                </div>
                <div className="text-white countdown-number-text font-extrabold pb-2">:</div>
                <div className="flex flex-col items-center">
                  <span id="minutes" className="countdown-number-text font-extrabold text-[#e0e0e0]">{minutes}</span>
                  <span className="text-sm md:text-base uppercase text-gray-400 mt-2">MINUTES</span>
                </div>
                <div className="text-white countdown-number-text font-extrabold pb-2 hidden sm:block">:</div>
                <div className="flex flex-col items-center hidden sm:flex">
                  <span id="seconds" className="countdown-number-text font-extrabold text-[#e0e0e0]">{seconds}</span>
                  <span className="text-sm md:text-base uppercase text-gray-400 mt-2">SECONDS</span>
                </div>
              </div>
            )}
          </div>
          </div>
          </div>
        </div>
    </>
  );
};

export default Timer;
