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

import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
      <Card className="p-4 sm:p-6 md:p-8 w-full max-w-full lg:max-w-[100%] max-h-[100%] h-auto sm:min-h-[600px] md:min-h-[450px] lg:h-[550px] bg-[#1A1A1A] rounded-xl flex flex-col justify-between ">
        <CardHeader className="pb-0 sm:pb-2">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full mb-4 sm:mb-6">
            <CardTitle className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] mb-2 sm:mb-0">
              OCTOBER 15-17, 2052
            </CardTitle>
            <CardTitle className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] text-left sm:text-right">
              Horizon Convention Center, TechCity, Utopolis
            </CardTitle>
          </div>

          <CardDescription className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-tight sm:leading-tight">
            NEXT-GEN AI <br />
            SUMMIT
          </CardDescription>
        </CardHeader>

        <CardDescription className="flex-grow pt-4 sm:pt-6 md:pt-8 pb-4 sm:pb-6">
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] tracking-tight sm:tracking-normal lg:tracking-widest">
            Explore the cutting-edge innovations shaping the future of
            artificial intelligence. <br className="hidden sm:inline" />
            Join global leaders and visionaries for two days of insights,
            discussions, and breakthroughs.
          </p>
        </CardDescription>

        <button className=" flex justify-center text-white text-bold p-10 bg-[#0147FF] w-[500px] h-auto px-10 py-4  rounded-full hover:bg-white hover:text-black >">
          Early bird tickets
        </button>

        <CardContent className="p-0 pt-4 sm:pt-6"></CardContent>
      </Card>
    </div>
  );
};

export default HeroSection;
