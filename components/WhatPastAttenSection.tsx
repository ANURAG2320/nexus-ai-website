import React from "react";
import Carousel from "./ui/carsol";

const WhatPastAttenSection = () => {
  const slides = [
    {
      title: "GAME-CHANGING INSIGHTS",
      userName: "Jane Doe",
      designation: "AI Researcher",
    },
    {
      title: "THE BEST AI EVENT!",
      userName: "John Smith",
      designation: "Data Scientist",
    },
    {
      title: "UNMATCHED OPPORTUNITIES",
      userName: "Alice Johnson",
      designation: "ML Engineer",
    },
    {
      title: "DISCOVER THE FUTURE",
      userName: "Jon Don",
      designation: "AI Engineer",
    },
  ];

  return (
    <>
      <div className="p-30">
        <div className="text-bold text-left text-[50px]">
          What Past Attendees Say
        </div>

        <div>
          <Carousel slides={slides} />
        </div>
      </div>
    </>
  );
};

export default WhatPastAttenSection;
