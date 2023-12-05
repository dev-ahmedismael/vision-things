import React from "react";
import SectionWithCards from "@/templates/SectionWithCards";
import { Box } from "@mui/material";

const HomeOurServices = () => {
  const section = {
    title: "خدماتنا",
    description:
      "تقدم شركة رؤية الأشياء العديد من الخدمات التقنية والمعلوماتية والشبكات وغيرها من الخدمات التي يمكنك الاطلاع عليها ومعرفة المزيد عنها",
    cards: [
      {
        id: 1,
        title: "البحث والتطوير",
        description:
          "تعمل الشركة على تقديم أحدث الحلول التقنية من خلال البحث والتطوير في المجالات التالية: الذكاء الاصطناعي ورؤية الكمبيوتر والروبوتات والواقع المعزز وانترنت الأشياء.",
        boxColor: "linear-gradient(to bottom,#8B60ED,#B372BD)",
        url: "/ar/our-services",
      },
      {
        id: 2,
        title: "حلول الشبكات",
        description:
          "تصميم امتداد الشبكة هو عملية تخطيط وتنفيذ نظام شبكة جديد أو محدث. وهذا يشمل تحديد احتياجات العمل",
        boxColor: "linear-gradient(to bottom,#21C8F6,#637BFF)",
        url: "/ar/our-services",
      },
      {
        id: 3,
        title: "حلول الأعمال",
        description:
          "إنشاء المواقع الإلكترونية والحلول التقنية لتسهيل عمليات إدارة الأعمال وجعلها أكثر احترافية إدارياً",
        boxColor: "linear-gradient(to bottom,#6EDCC4,#1AAB8B)",
        url: "/ar/our-services",
      },
    ],
    hasBtn: true,
    btn: "اعرف أكثر",
    url: "/ar/our-services",
  };

  return (
    <Box sx={{ direction: "rtl" }}>
      <SectionWithCards
        title={section.title}
        description={section.description}
        cards={section.cards}
        hasBtn={section.hasBtn}
        btn={section.btn}
        url={section.url}
      />
    </Box>
  );
};

export default HomeOurServices;
