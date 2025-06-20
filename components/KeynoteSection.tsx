"use client";
import { cn } from "@/lib/utils";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const KeynoteSection = () => {
  const cards = [
    { title: "AI Keynote Speakers", description: "Learn from global leaders driving AI innovation." },
    { title: "Hands-on Workshops", description: "Participate in live sessions to sharpen your skills." },
    { title: "Networking Opportunities", description: "Connect with industry professionals and peers." },
    { title: "Exhibitor Showcase", description: "Explore cutting-edge AI products and demos." },
    { title: "Panel Discussions", description: "Gain insights from thought leaders in the industry." },
    { title: "Career Fair", description: "Meet top companies hiring AI talent." },
    { title: "Startup Pitch", description: "Watch emerging startups showcase their ideas." },
    { title: "After Party", description: "Unwind and network with peers after sessions." },
  ];

  return (
    <>
      {/* Header Section */}
      <div className="text-white px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-y-8 md:gap-x-16">
          <div className="w-full md:w-1/2 lg:w-2/5">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide leading-tight">
              KEYNOTE SPEAKERS
            </h1>
          </div>
          <div className="w-full md:w-1/2 lg:w-3/5 mt-4 md:mt-0">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-right leading-relaxed text-white">
              Meet the industry leaders shaping the future of AI.
            </p>
          </div>
        </div>
      </div>

      {/* Card Grid */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {cards.map((card, index) => (
            <Card key={index} className="min-h-[260px] h-full hover:bg-[#1A1A1A] hover:text-white">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl md:text-2xl">{card.title}</CardTitle>
                <CardDescription className="mt-2 text-sm sm:text-base">{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
              
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-12 flex justify-start">
        <button className="bg-white text-black font-semibold px-8 sm:px-12 md:px-16 py-3 sm:py-4 rounded-full transition-all hover:bg-[#0147FF] hover:text-white text-sm sm:text-base">
          And more
        </button>
      </div>
    </>
  );
};

export default KeynoteSection;
