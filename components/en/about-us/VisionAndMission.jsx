import LtrSection from "@/templates/LtrSection";
import React from "react";

const VisionAndMission = () => {
  const section = {
    title: "Vision and mission",
    description:
      "Providing a vision for the future of technology in the Saudi Arabia. Providing the latest science technology solutions for help our customers in their business and supporting the Kingdom's economy by providing the latest technology and solutions.",
    imgUrl: "/images/about_eye.png",
    hasBtn: true,
    btnUrl: "/en/contact-us",
    btnContent: "Contact Now",
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

export default VisionAndMission;
