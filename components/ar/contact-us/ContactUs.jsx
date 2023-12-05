import Title from "@/templates/Title";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <Container>
      <header>
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
                هيا نتحدث
              </Typography>
            </Title>

            <Typography variant="h2" color={"#51a29d"}>
              اتصل بنا...
            </Typography>
          </Box>
          <Box display={{ xs: "none", sm: "block" }}>
            <img
              src="/images/contact.png"
              alt="Contact us"
              width={"100%"}
              className="reverse-img"
            />
          </Box>
        </Box>
      </header>
      <ContactForm />
    </Container>
  );
};

export default ContactUs;
