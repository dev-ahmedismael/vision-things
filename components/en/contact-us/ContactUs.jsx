import Title from "@/templates/Title";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <Container>
      <header>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Title>
              <Typography variant="h2" color={"white"}>
                Let's talk
              </Typography>
            </Title>

            <Typography variant="h2" color={"#51a29d"}>
              Contact us...
            </Typography>
          </Box>
          <Box display={{ xs: "none", sm: "block" }}>
            <img src="/images/contact.png" alt="Contact us" width={"100%"} />
          </Box>
        </Box>
      </header>
      <ContactForm />
    </Container>
  );
};

export default ContactUs;
