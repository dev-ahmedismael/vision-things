"use client";
import Section from "@/templates/Section";
import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const AboutStatistics = () => {
  const [counterOn, setCounterOn] = useState(false);

  const statistics = [
    { id: 1, title: "سنوات من الخبرة", hasAPlus: true, number: 10 },
    { id: 2, title: "مشروع", hasAPlus: true, number: 50 },
    { id: 3, title: "عميل سعيد", hasAPlus: true, number: 100 },
    { id: 4, title: "شركاء", hasAPlus: true, number: 5 },
    { id: 5, title: "مكاتب", hasAPlus: false, number: 2 },
    { id: 6, title: "ضيافة", hasAPlus: false, number: 3 },
  ];
  return (
    <Section>
      <Container>
        <Box py={5} sx={{ direction: "rtl" }}>
          <ScrollTrigger onEnter={() => setCounterOn(true)}>
            <Grid container spacing={3}>
              {statistics.map((e) => (
                <Grid key={e.id} item xs={6} sm={2}>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Typography
                      variant="h4"
                      color={"white"}
                      textAlign={"center"}
                    >
                      {e.hasAPlus && "+"}
                    </Typography>
                    <Typography
                      variant="h4"
                      color={"white"}
                      textAlign={"center"}
                    >
                      <CountUp
                        start={0}
                        end={e.number}
                        duration={3}
                        delay={0}
                      />
                    </Typography>
                  </Box>

                  <Typography variant="h5" textAlign={"center"}>
                    {e.title}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </ScrollTrigger>
        </Box>
      </Container>
    </Section>
  );
};

export default AboutStatistics;
