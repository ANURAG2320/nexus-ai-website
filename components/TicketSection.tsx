import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { div } from "framer-motion/client";

const TicketSection = () => {
  return (
    <>
      <div className="p-10">

        <div className="w-full max-w-6xl mx-auto p-4 md:p-8 lg:p-12"> {/* Adjusted padding */}
          <div className="text-white font-extrabold text-4xl md:text-5xl text-left mb-8">Ticket Options</div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 justify-items-center py-10"> {/* Responsive grid */}
            {/* Card 1 */}
            <Card className="w-full max-w-sm h-[400px] text-white text-center bg-[#1a1a1a] hover:bg-[#0147FF]  transition-all duration-300 ease-in-out">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">
                  EARLY BIRD PASS
                </CardTitle>
                <CardDescription className="text-sm md:text-base mb-20 text-gray-400">
                  Limited time offer!
                </CardDescription>
                <CardTitle className="text-6xl md:text-7xl lg:text-[80px]">
                  $400
                </CardTitle>
              </CardHeader>
              <CardFooter className="flex-col gap-2">
                <button className="px-6 py-3 rounded-full text-black font-semibold shadow-lg transition-all duration-300 ease-in-out bg-[#ffffff]  ">
                  Get your ticket
                </button>
              </CardFooter>
            </Card>

            {/* Card 2 */}
            <Card className="w-full max-w-sm h-[400px] text-white text-center bg-[#1a1a1a] hover:bg-[#0147FF]  transition-all duration-300 ease-in-out">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">
                  STANDARD PASS
                </CardTitle>
                <CardDescription className="text-sm md:text-base mb-20 text-gray-400">
                  Full access to all sessions.
                </CardDescription>
                <CardTitle className="text-6xl md:text-7xl lg:text-[80px]">
                  $600
                </CardTitle>
              </CardHeader>
              <CardFooter className="flex-col gap-2">
                <button className="px-6 py-3 rounded-full text-black font-semibold shadow-lg transition-all duration-300 ease-in-out bg-[#ffffff]  ">
                  Get your ticket
                </button>
              </CardFooter>
            </Card>

            {/* Card 3 */}
            <Card className="w-full max-w-sm h-[400px] text-white text-center bg-[#1a1a1a] hover:bg-[#0147FF]  transition-all duration-300 ease-in-out">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">
                  VIP PASS
                </CardTitle>
                <CardDescription className="text-sm md:text-base mb-20 text-gray-400">
                  Premium access & exclusive perks!
                </CardDescription>
                <CardTitle className="text-6xl md:text-7xl lg:text-[80px]">
                  $1000
                </CardTitle>
              </CardHeader>
              <CardFooter className="flex-col gap-2">
                <button className="px-6 py-3 rounded-full text-black font-semibold shadow-lg transition-all duration-300 ease-in-out bg-[#ffffff]  ">
                  Get your ticket
                </button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketSection;
