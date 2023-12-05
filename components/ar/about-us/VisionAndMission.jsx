import LtrSection from "@/templates/LtrSection";
import { Box } from "@mui/material";
import React from "react";

const VisionAndMission = () => {
  const section = {
    title: "رؤيتنا ومهمتنا",
    description:
      "تقديم رؤية لمستقبل التكنولوجيا في المملكة العربية السعودية. تقديم أحدث الحلول العلمية والتقنية لمساعدة عملائنا في أعمالهم ودعم اقتصاد المملكة من خلال توفير أحدث التقنيات والحلول.",
    imgUrl: "/images/about_eye.png",
    hasBtn: true,
    btnUrl: "/ar/contact-us",
    btnContent: "اتصل بنا ",
  };
  return (
    <Box sx={{ direction: "rtl" }}>
      <LtrSection
        title={section.title}
        description={section.description}
        imgUrl={section.imgUrl}
        hasBtn={section.hasBtn}
        btnUrl={section.btnUrl}
        btnContent={section.btnContent}
      />
    </Box>
  );
};

export default VisionAndMission;
