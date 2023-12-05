import LtrSection from "@/templates/LtrSection";
import { Box } from "@mui/material";
import React from "react";

const HomeAboutUs = () => {
  const section = {
    title: "عن الشركة",
    description:
      "شركة سعودية تعمل في مجال التقنية والمعلومات من خلال استخدام تقنيات الذكاء الاصطناعي (الذكاء الاصطناعي) والرؤية الحاسوبية واستخدام الروبوتات وتوفير تجربة الواقع المعزز (AR) وعلوم البيانات واكتساب المخرجات من خلال إجراءات معينة تم إنشاؤها وفقًا لسير العمل وتركيب خدمات الشبكات والاتصالات وأنظمة مراقبة الكاميرات وتقديم خدمات الأمن السيبراني.",
    imgUrl: "/images/home_world.svg",
    hasBtn: true,
    btnUrl: "/ar/about-us",
    btnContent: "اعرف أكثر",
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

export default HomeAboutUs;
