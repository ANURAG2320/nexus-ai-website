import React from "react";

const AgendaSection = () => {
  return (
    <>
      <div>
        <div
          className="
        px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32  
        py-8 sm:py-12 md:py-16                
        flex                                  
        flex-col md:flex-row                  
        justify-start md:justify-between    
        items-start md:items-center          
        gap-4 md:gap-0                       
      "
        >
          <h1
            className="pl-12
          text-left
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[100px] 
          font-bold                            
          tracking-widest                       
          text-white                            
        "
          >
            AGENDA
          </h1>
          <h1
            className="pr-10
            w-full md:w-auto
            text-left md:text-right              
            text-sm sm:text-base md:text-lg lg:text-xl 
            text-gray-300                         
            leading-tight                        
            "
          >
            October 15-17, 2052 | Horizon <br />
            Convention Center, Amsterdam
          </h1>
        </div>

        {/* container */}

        <div className="p-10">
          <div className="p-10 sm:p-6 md:p-8  w-3/4 max-w-full lg:max-w-[100%] max-h-[100%] h-auto sm:min-h-[60%] md:min-h-[45%] lg:h-[55%] bg-[#1A1A1A] rounded-xl mx-auto ">
            {/* content of the container */}

            {/* DAY 1 */}
            <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
              {/* Row 1: Day Number & Title */}
              <div
                className="mx-2
          flex
          flex-col sm:flex-row              
          justify-between                  
          items-start                       
          gap-4 sm:gap-6 md:gap-8          
        "
              >
                {/* Left Column (Day Number) */}
                <div className="flex-1 text-left ">
                  <h2
                    className="
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[40px] 
              font-bold
              leading-tight
              text-white
            "
                  >
                    DAY 1
                  </h2>
                </div>

                {/* Right Column (Title) */}
                <div className="flex-1  sm:text-right">
                  <h2
                    className="
            text-left
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[40px]
              font-bold
              leading-tight
              text-white
            "
                  >
                    AI Innovations & Trends
                  </h2>
                </div>
              </div>

              {/* Row 2: Time & Description */}
              <div
                className=" mx-2
          mt-1 sm:mt-2                      
          flex
          flex-col sm:flex-row            
          justify-between                  
          items-start                      
          gap-4 sm:gap-6 md:gap-8          
        "
              >
                {/* Left Column (Time) */}
                <div className="flex-1 ">
                  <h3
                    className="
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] 
              font-bold
              leading-tight
              text-white
            "
                  >
                    09:00 – 19:00
                  </h3>
                </div>

                {/* Right Column (Description) */}
                <div className="flex-1  sm:text-right">
                  <p
                    className=" text-left text-md
              text-base sm:text-sm md:text-smlg:text-md 
              leading-relaxed                  
              text-gray-300
            "
                  >
                    The summit kicks off with a keynote, expert panels, and
                    discussions on AI’s impact, ethics, and automation. Hands-on
                    workshops and a networking event wrap up the day.
                  </p>
                </div>
              </div>
            </div>

            {/* DAY 2 */}
            <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
              {/* Row 1: Day Number & Title */}
              <div
                className="mx-2
          flex
          flex-col sm:flex-row              
          justify-between                  
          items-start                       
          gap-4 sm:gap-6 md:gap-8          
        "
              >
                {/* Left Column (Day Number) */}
                <div className="flex-1 text-left ">
                  <h2
                    className="
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[40px] 
              font-bold
              leading-tight
              text-white
            "
                  >
                    DAY 2
                  </h2>
                </div>

                {/* Right Column (Title) */}
                <div className="flex-1  sm:text-right">
                  <h2
                    className="
            text-left
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[40px]
              font-bold
              leading-tight
              text-white
            "
                  >
                    AI Technologies & Applications
                  </h2>
                </div>
              </div>

              {/* Row 2: Time & Description */}
              <div
                className=" mx-2
          mt-1 sm:mt-2                      
          flex
          flex-col sm:flex-row            
          justify-between                  
          items-start                      
          gap-4 sm:gap-6 md:gap-8          
        "
              >
                {/* Left Column (Time) */}
                <div className="flex-1 ">
                  <h3
                    className="
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] 
              font-bold
              leading-tight
              text-white
            "
                  >
                    09:00 – 20:00
                  </h3>
                </div>

                {/* Right Column (Description) */}
                <div className="flex-1  sm:text-right">
                  <p
                    className=" text-left text-md
              text-base sm:text-sm md:text-smlg:text-md 
              leading-relaxed                  
              text-gray-300
            "
                  >
                    Explore the latest in generative AI, robotics, and NLP, with
                    industry-led discussions and tech demos. A startup showcase
                    and investor insights highlight AI’s business potential.
                  </p>
                </div>
              </div>
            </div>

            {/* DAY 3 */}

            <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
              {/* Row 1: Day Number & Title */}
              <div
                className="mx-2
          flex
          flex-col sm:flex-row              
          justify-between                  
          items-start                       
          gap-4 sm:gap-6 md:gap-8          
        "
              >
                {/* Left Column (Day Number) */}
                <div className="flex-1 text-left ">
                  <h2
                    className="
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[40px] 
              font-bold
              leading-tight
              text-white
            "
                  >
                    DAY 3
                  </h2>
                </div>

                {/* Right Column (Title) */}
                <div className="flex-1  sm:text-right">
                  <h2
                    className="
            text-left
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[40px]
              font-bold
              leading-tight
              text-white
            "
                  >
                    Future of AI & Networking
                  </h2>
                </div>
              </div>

              {/* Row 2: Time & Description */}
              <div
                className=" mx-2
          mt-1 sm:mt-2                      
          flex
          flex-col sm:flex-row            
          justify-between                  
          items-start                      
          gap-4 sm:gap-6 md:gap-8          
        "
              >
                {/* Left Column (Time) */}
                <div className="flex-1 ">
                  <h3
                    className="
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] 
              font-bold
              leading-tight
              text-white
            "
                  >
                    09:30 – 16:00
                  </h3>
                </div>

                {/* Right Column (Description) */}
                <div className="flex-1  sm:text-right">
                  <p
                    className=" text-left text-md
              text-base sm:text-sm md:text-smlg:text-md 
              leading-relaxed                  
              text-gray-300
            "
                  >
                    Dive into AI’s long-term impact, attend expert-led
                    workshops, and watch the startup pitch competition. The
                    event closes with a visionary keynote and final networking
                    sessions.
                  </p>
                </div>
              </div>
              <div className="flex justify-end items-center mt-24 mb-10 ">
                <button className="bg-[#0147FF] w-[500px] h-auto px-20 py-4 text-bold  rounded-full hover:bg-white hover:text-black >">
                  View detailed schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgendaSection;
