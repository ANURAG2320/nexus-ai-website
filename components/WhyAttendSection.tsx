import React from "react";
import FeaturesGrid from "./ui/features";

function WhyAttendSection() {
  return (
    <>
      <div className="text-white px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start gap-y-8 md:gap-x-16">
          {/* Heading */}
          <div className="w-full md:w-2/5">
            <h1
              className="
          text-left
          text-[48px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] 
          font-bold
          tracking-widest
          whitespace-nowrap
        "
            >
              WHY ATTEND?
            </h1>
          </div>

          {/* Paragraph */}
          <div className="w-full md:w-3/5">
            <p
              className="
          text-base sm:text-md md:text-lg lg:text-xl 
          text-right
          leading-relaxed 
          text-white
        "
            >
              Discover why Next-Gen AI Summit is the <br /> must-attend event
              for AI professionals,
              <br /> innovators, brand industry leaders.
            </p>
          </div>
        </div>
      </div>
      <div>
        <FeaturesGrid />
      </div>
    </>
  );
}

export default WhyAttendSection;
