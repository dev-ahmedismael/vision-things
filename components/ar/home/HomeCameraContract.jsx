import RtlSection from "@/templates/RtlSection";
import { Box } from "@mui/material";
import React from "react";

const HomeCameraContract = () => {
  const section = {
    title: "عقد صيانة كاميرات",
    description:
      "تقوم شركة رؤية الأشياء بتوصيل وتمديد شبكات الكاميرات الأمنية كما تمكنكم من التعاقد إلكترونيا على التركيب والتمديد وحجز موعد للمعاينة السريعة.",
    imgUrl: "/images/home_camera.png",
    hasBtn: true,
    btnUrl: "https://ccm.vision-things.com/",
    btnContent: "تعاقد الآن",
  };
  return (
    <Box sx={{ direction: "rtl" }}>
      <RtlSection
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

export default HomeCameraContract;
