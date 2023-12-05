import RoundedCard from "@/templates/RoundedCard";
import SOS from "@/templates/SOS";
import SectionWithCards from "@/templates/SectionWithCards";
import Title from "@/templates/Title";
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const HomeWhyChooseUs = () => {
  const section = {
    title: "Why choose Vision Things",
    description:
      "Why choose Vision Things to supply, install and operate technical equipment in the fields of IT and information in general?",
    cards: [
      {
        id: 1,
        title: "Supplying new technical equipment",
        description:
          "A vision of things company provides completely new and always better technical solutions",
        boxColor: "linear-gradient(to bottom,#8B60ED,#B372BD)",
      },
      {
        id: 2,
        title: "Providing technical support for technical equipment",
        description:
          "We also provide technical support, assistance and visits to solve problems",
        boxColor: "linear-gradient(to bottom,#21C8F6,#637BFF)",
      },
      {
        id: 3,
        title: "The price is better than market price",
        description:
          "Vision of Things always offers the best prices compared to the local and international market",
        boxColor: "linear-gradient(to bottom,#6EDCC4,#1AAB8B)",
      },
      {
        id: 4,
        title: "The company's experience in the field of technical",
        description:
          "The company has sufficient experience in the fields of IT by our engineers",
        boxColor: "linear-gradient(to bottom,#F19A1A,#FFC73C)",
      },
      {
        id: 5,
        title: "Providing the appropriate technical solutions",
        description:
          "We always choose and recommend the best choice and suitable solutions for our customers",
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
                    <Link href={"en/our-services"}>
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
