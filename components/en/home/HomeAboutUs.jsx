import LtrSection from "@/templates/LtrSection";
import React from "react";

const HomeAboutUs = () => {
  const section = {
    title: "About Us",
    description:
      "A Saudi company working in the field of technology and information through using of AI (artificial intelligence) technologies, computer vision, the use of robots, the provision of AR (augmented reality) experience, data science, the acquisition of outputs through certain procedures that created according to the workflow, the installation of networking and communications services, camera monitoring systems and the provision of Cyber security services.",
    imgUrl: "/images/home_world.svg",
    hasBtn: true,
    btnUrl: "/en/about-us",
    btnContent: "Know More",
  };
  return (
    <LtrSection
      title={section.title}
      description={section.description}
      imgUrl={section.imgUrl}
      hasBtn={section.hasBtn}
      btnUrl={section.btnUrl}
      btnContent={section.btnContent}
    />
  );
};

export default HomeAboutUs;
