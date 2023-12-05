import AboutCompany from "@/components/en/about-us/AboutCompany";
import AboutUsHeader from "@/components/en/about-us/AboutUsHeader";
import OurTeam from "@/components/en/about-us/OurTeam";
import Values from "@/components/en/about-us/Values";
import VisionAndMission from "@/components/en/about-us/VisionAndMission";
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
