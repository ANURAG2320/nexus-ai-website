"use client";

import React from "react";

const features = [
  {
    number: "01",
    title: "CUTTING-EDGE INSIGHTS",
    description:
      "Gain firsthand knowledge from top AI experts and pioneers shaping the industry.",
  },
  {
    number: "02",
    title: "HANDS-ON LEARNING",
    description:
      "Participate in interactive workshops, live demos, and deep-dive sessions to sharpen your skills.",
  },
  {
    number: "03",
    title: "EXCLUSIVE NETWORKING",
    description:
      "Connect with AI leaders, investors, startups, and fellow professionals at curated networking events.",
  },
  {
    number: "04",
    title: "INNOVATION SHOWCASE",
    description:
      "Explore groundbreaking AI solutions, from emerging startups to tech giants redefining the future.",
  },
];

const FeaturesGrid = () => {
  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature) => (
          <div
            key={feature.number}
            className="
              relative
              bg-[#1a1a1a] 
              rounded-xl
              p-8 sm:p-10 lg:p-12
              shadow-lg
              overflow-hidden
              flex flex-col
              justify-between
              min-h-[250px]
            "
          >
            <span
              className="
                absolute
                bottom-[-40px] right-[-30px]
                text-8xl sm:text-[10rem] md:text-[12rem] lg:text-[15rem] xl:text-[18rem]
                font-extrabold
                leading-none
                pointer-events-none
                select-none
                bg-clip-text
                text-transparent
                bg-gradient-to-br from-blue-600 to-blue-900
              "
              style={{
                WebkitTextStroke: "1px rgba(0, 66, 232, 1)",
                filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))",
              }}
            >
              {feature.number}
            </span>

            {/* Content: Title and Description */}
            <div className="relative z-10">
              <h3
                className="
                  text-xl sm:text-2xl lg:text-3xl
                  font-bold mb-4 uppercase  "
              >
                {feature.title}
              </h3>
              <p
                className="
                  text-base sm:text-lg leading-relaxed max-w-[80%] "
              >
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;
