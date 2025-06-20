import MyNavbar from "@/components/layout/MyNavbar";
import HeroSection from "@/components/HeroSection";
import LogoSection from "@/components/LogoSection";
import AgendaSection from "@/components/AgendaSection";
import KeynoteSection from "@/components/KeynoteSection";
import Timer from "@/components/Timer";
import TicketSection from "@/components/TicketSection";
import WeAreSection from "@/components/WeAreSection";
import WhatPastAttenSection from "@/components/WhatPastAttenSection";
import WhyAttendSection from "@/components/WhyAttendSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-balck-900 ">
        <MyNavbar />
      </div>
      <div className="30"><HeroSection />
      <LogoSection />
      <AgendaSection />
      <KeynoteSection />
      <WhyAttendSection />
<WhatPastAttenSection />
      <Timer />
      <TicketSection />
    
      <WeAreSection />
      <Footer />
      </div>
    </>
  );
}
