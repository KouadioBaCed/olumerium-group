import Hero from "@/components/sections/Hero";
import KeyStats from "@/components/sections/KeyStats";
import AboutTeaser from "@/components/sections/AboutTeaser";
import ActivitiesSection from "@/components/sections/ActivitiesSection";
import SubsidiariesSection from "@/components/sections/SubsidiariesSection";
import Timeline from "@/components/sections/Timeline";
import PresenceSection from "@/components/sections/PresenceSection";
import VisionMission from "@/components/sections/VisionMission";
import ValuesGrid from "@/components/sections/ValuesGrid";
import WhyUs from "@/components/sections/WhyUs";
import GovernanceSection from "@/components/sections/GovernanceSection";
import RSESection from "@/components/sections/RSESection";
import Perspectives2030 from "@/components/sections/Perspectives2030";
import PartnersSection from "@/components/sections/PartnersSection";
import CTAContact from "@/components/sections/CTAContact";

export default function Home() {
  return (
    <>
      <Hero />
      <KeyStats />
      <AboutTeaser />
      <ActivitiesSection />
      <SubsidiariesSection />
      <Timeline />
      <PresenceSection />
      <VisionMission />
      <ValuesGrid />
      <WhyUs />
      <GovernanceSection />
      <RSESection />
      <Perspectives2030 />
      <PartnersSection />
      <CTAContact />
    </>
  );
}
