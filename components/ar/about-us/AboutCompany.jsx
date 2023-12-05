import CenteredSection from "@/templates/CenteredSection";
import React from "react";

const AboutCompany = () => {
  const section = {
    title: "",
    description:
      "شركة سعودية تعمل في مجال التقنية والمعلومات من خلال استخدام تقنيات الذكاء الاصطناعي (الذكاء الاصطناعي) والرؤية الحاسوبية واستخدام الروبوتات وتوفير تجربة الواقع المعزز (AR) وعلوم البيانات واكتساب المخرجات من خلال إجراءات معينة تم إنشاؤها وفقًا لسير العمل وتركيب خدمات الشبكات والاتصالات وأنظمة مراقبة الكاميرات وتقديم خدمات الأمن السيبراني",
  };
  return <CenteredSection description={section.description} />;
};

export default AboutCompany;
