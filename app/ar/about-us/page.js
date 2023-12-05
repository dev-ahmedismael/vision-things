import AboutCompany from "@/components/ar/about-us/AboutCompany";
import AboutUsHeader from "@/components/ar/about-us/AboutUsHeader";
import OurTeam from "@/components/ar/about-us/OurTeam";
import Values from "@/components/ar/about-us/Values";
import VisionAndMission from "@/components/ar/about-us/VisionAndMission";
import React from "react";

const page = () => {
  return (
    <main>
      <AboutUsHeader />
      <AboutCompany />
      <VisionAndMission />
      <Values />
    </main>
  );
};

export default page;
