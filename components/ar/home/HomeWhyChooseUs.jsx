import React from "react";
import RoundedCard from "@/templates/RoundedCard";
import SOS from "@/templates/SOS";
import SectionWithCards from "@/templates/SectionWithCards";
import Title from "@/templates/Title";
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";

const HomeWhyChooseUs = () => {
  const section = {
    title: "لماذا اختار شركة رؤية الأشياء",
    description:
      "لماذا اختار شركة رؤية الأشياء لتوريد وتركيب وتشغيل المعدات التقنية في مجالات تكنولوجيا المعلومات والمعلومات بشكل عام؟",
    cards: [
      {
        id: 1,
        title: "توريد المعدات التقنية الجديدة",
        description:
          "توفر شركة رؤية الأشياء حلولاً تقنية جديدة تمامًا وأفضل دائمًا",
        boxColor: "linear-gradient(to bottom,#8B60ED,#B372BD)",
      },
      {
        id: 2,
        title: "تقديم الدعم الفني للمعدات التقنية",
        description: "كما نقدم الدعم الفني والمساعدة والزيارات لحل المشاكل",
        boxColor: "linear-gradient(to bottom,#21C8F6,#637BFF)",
      },
      {
        id: 3,
        title: "السعر أفضل من سعر السوق",
        description:
          "تقدم رؤية الأشياء دائما أفضل الأسعار مقارنة بالسوق المحلي والعالمي",
        boxColor: "linear-gradient(to bottom,#6EDCC4,#1AAB8B)",
      },
      {
        id: 4,
        title: "خبرة الشركة في المجال التقني",
        description:
          "تتمتع الشركة بالخبرة الكافية في مجالات تكنولوجيا المعلومات على أيدي مهندسينا",
        boxColor: "linear-gradient(to bottom,#F19A1A,#FFC73C)",
      },
      {
        id: 5,
        title: "تقديم الحلول التقنية المناسبة",
        description:
          "نحن دائمًا نختار ونوصي بالاختيار الأفضل والحلول المناسبة لعملائنا",
        boxColor: "linear-gradient(to bottom,#DB678D,#EC454F)",
      },
    ],
    hasBtn: false,
  };
  return (
    <SOS>
      <section className="section-with-cards">
        <Container>
          <Box py={10}>
            <Box display={"flex"} justifyContent={"center"}>
              <Title>
                <Typography variant="h3" color={"white"}>
                  {section.title}
                </Typography>
              </Title>
            </Box>
            <Typography variant="h5" textAlign={"center"} mt={5} mb={10}>
              {section.description}
            </Typography>
            <Grid container spacing={5} justifyContent={"center"}>
              {section.cards.map((card) => (
                <Grid key={card.id} item xs={12} sm={4}>
                  <SOS>
                    <Link href={"ar/our-services"}>
                      <RoundedCard
                        title={card.title}
                        description={card.description}
                        boxColor={card.boxColor}
                        section={section}
                      />
                    </Link>
                  </SOS>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </section>
    </SOS>
  );
};

export default HomeWhyChooseUs;
