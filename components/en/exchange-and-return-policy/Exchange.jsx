import Section from "@/templates/Section";
import Title from "@/templates/Title";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Exchange = () => {
  const paragraphs = [
    "This is an electronic service, and the value of the service cannot be refunded in any way after downloading the service.",
    "If there was an error in the electronic file or he could not download the electronic file, a refund request can be submitted via e-mail within 3 days from the date of purchase.",
    "The customer has 3 days to retrieve it if he did not download the electronic document.",
    "The refund shall be made to the same bank account in which it was previously registered.",
    "Once the document is downloaded, it cannot be retrieved.",
    "The return procedures take 21 working days from the date of the return request.",
    "All rights reserved",
  ];
  return (
    <Section>
      <Container>
        <Box py={5}>
          <Box display={"flex"} justifyContent={"center"} mb={5}>
            <Title>
              <Typography textAlign={"center"} variant="h3" color={"white"}>
                Exchange and Return Policy
              </Typography>
            </Title>
          </Box>

          {paragraphs.map((p, index) => (
            <Box key={index}>
              <Typography mb={2}>{p}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Section>
  );
};

export default Exchange;
