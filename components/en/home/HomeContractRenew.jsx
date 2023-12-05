import SecBtn from "@/templates/SecBtn";
import Section from "@/templates/Section";
import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const HomeContractRenew = () => {
  return (
    <Section>
      <Container>
        <Box
          py={5}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography variant={"h4"} mb={3} color="white">
            Contract Renew
          </Typography>
          <Typography mb={5}>
            Do you've a contract and you like to renew it?
          </Typography>
          <Link href={"/ar/contract-renew"}>
            <SecBtn>Renew now</SecBtn>
          </Link>
        </Box>
      </Container>
    </Section>
  );
};

export default HomeContractRenew;
