import CenteredSection from "@/templates/CenteredSection";
import React from "react";

const AboutCompany = () => {
  const section = {
    title: "",
    description:
      "A Saudi company working in the field of technology and information through using of AI (artificial intelligence) technologies, computer vision, the use of robots, the provision of AR (augmented reality) experience, data science, the acquisition of outputs through certain procedures that created according to the workflow, the installation of networking and communications services, camera monitoring systems and the provision of Cyber security services.",
  };
  return <CenteredSection description={section.description} />;
};

export default AboutCompany;
