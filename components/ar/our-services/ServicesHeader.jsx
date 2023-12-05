import Title from "@/templates/Title";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const ServicesHeader = () => {
  return (
    <header>
      <Container>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          height={500}
          sx={{ direction: "rtl" }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Title>
              <Typography variant="h2" color={"white"}>
                اعرف اكثر
              </Typography>
            </Title>
            <Typography variant="h3" color={"#51a29d"} my={2}>
              عن خدماتنا...
            </Typography>
          </Box>
          <Box display={{ xs: "none", sm: "none", md: "block" }}>
            <img src="/images/ai_2.png" alt="Brain" width={700} height={500} />
          </Box>
        </Box>
      </Container>
    </header>
  );
};

export default ServicesHeader;
