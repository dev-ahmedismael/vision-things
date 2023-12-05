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
            تجديد عقد صيانة كاميرات{" "}
          </Typography>
          <Typography mb={5}>
            {" "}
            اذا كان لديك تعاقد معنا وترغب بتجديده، توفر شركة رؤية الأشياء
            امكانية تجديد العقد الكترونياً{" "}
          </Typography>
          <Link href={"/ar/contract-renew"}>
            <SecBtn>جدد عقدك الآن</SecBtn>
          </Link>
        </Box>
      </Container>
    </Section>
  );
};

export default HomeContractRenew;
