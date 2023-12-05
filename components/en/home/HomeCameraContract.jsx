import RtlSection from "@/templates/RtlSection";
import React from "react";

const HomeCameraContract = () => {
  const section = {
    title: "Camera maintenance contract",
    description:
      "The Vision of Things company connects and extends the security camera networks, and also enables you to contract electronically for installation and extension, and to book an appointment for a quick inspection.",
    imgUrl: "/images/home_camera.png",
    hasBtn: true,
    btnUrl: "/en/contract",
    btnContent: "Get Contract",
  };
  return (
    <RtlSection
      title={section.title}
      description={section.description}
      imgUrl={section.imgUrl}
      hasBtn={section.hasBtn}
      btnUrl={section.btnUrl}
      btnContent={section.btnContent}
    />
  );
};

export default HomeCameraContract;
