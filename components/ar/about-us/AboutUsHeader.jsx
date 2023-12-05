import Title from "@/templates/Title";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const AboutUsHeader = () => {
  return (
    <header>
      <Container>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          sx={{ direction: "rtl" }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Title>
              <Typography variant="h2" color={"white"}>
                عن الشركة
              </Typography>
            </Title>
            <Typography variant="h3" color={"#51a29d"} my={2}>
              تقابل مع فريقنا...
            </Typography>
          </Box>
          <Box display={{ xs: "none", sm: "none", md: "block" }}>
            <img
              src="/images/about_brain.png"
              alt="Brain"
              width={700}
              height={500}
              className="reverse-img"
            />
          </Box>
        </Box>
      </Container>
    </header>
  );
};

export default AboutUsHeader;
