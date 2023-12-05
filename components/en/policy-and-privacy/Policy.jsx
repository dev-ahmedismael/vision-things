import Section from "@/templates/Section";
import Title from "@/templates/Title";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Policy = () => {
  const paragraphs = [
    {
      id: 1,
      title: "",
      description:
        "Your privacy is important to Vision Things. When you use our services, you trust us with your information. We understand this is a huge responsibility and we work hard to protect your information and keep you in control.",
    },
    {
      id: 2,
      title: "",
      description:
        "This privacy notice explains what personal data Vision Things process, how Vision Things process it, and for what purposes. Drafted in accordance with the Personal Data Protection Law and Regulations of the Kingdom of Saudi Arabia to help you understand the nature of the data we collect from you and how that data will be handled by Vision Things For the purposes of this privacy notice, personal data means any item of data, regardless of source or form at all, which independently or when combined with other available information may lead to the identification of a person including but not limited to: first name and surname, Saudi National ID number, addresses, phone number, bank account number, or credit card number or health data, photos or videos of the person.",
    },
    {
      id: 3,
      title: "",
      description:
        "This Privacy Notice applies to all segments and business units of the Company. All company employees, contractors and vendors who work either on a permanent or temporary basis are obligated to follow the set standards.",
    },
    {
      id: 4,
      title: "Why we collect and use your personal data?",
      description:
        "To provide you with the highest level of service and products, we collect and use your personal data. The legal basis for processing your personal data is:",
      list: [
        "Contractual - to fulfill service obligations to you.",
        "Approval - for other activities such as information, sales & marketing.",
        "Legal Compliance - Compliance with government requirements including but not limited to national security and public health protection.",
      ],
    },
    {
      id: 5,
      title: "These data collection purposes include, but are not limited to:",
      description: "",
      list: [
        "Enable and support our processes and systems to ensure continuity and quality of our services, provide accurate billing and enable us to process payments for products and services.",
        "Understanding your needs as customers and eligibility for products and services and recommending products and services that may be relevant to you",
        "Resolve any queries or complaints you may have and allow us to provide you with a customized customer experience across all of our channels.",
        "Provide reports to third parties and/or clients of our organization where such reports do not contain any personal information about you or any information that might identify you as a person in accordance with local privacy regulations.",
        ,
        "Additionally, Stuff Vision may work with other entities to ensure the quality of service provided. If your personal data is disclosed to these entities, it will be limited to the purposes specified in this Privacy Notice and for which you have provided consent.",
      ],
      anotherDiscription:
        "Thank you for using the See Things website. We are committed to protecting your privacy and we respect your right to control your personal data.",
    },
    {
      id: 6,
      title: "What data do we collect?",
      description:
        "We collect the information you give us, such as your name, email address, phone number, address, and date of birth. We also collect information that results from your use of our website, such as your IP address, the type of browser you use, and the web pages you visit.",
      list: [],
    },
    {
      id: 7,
      title: "How do we use the data we collect?",
      description:
        "We use the data we collect to provide the services you request from us, such as sending email and responding to your inquiries. We also use the data we collect to improve our Site and Services and to provide you with a better experience.",
    },
    {
      id: 8,
      title: "How do we protect your personal data?",
      description:
        "We use a variety of security measures to protect against unauthorized access to your personal data, including encryption and firewall technologies. How can you access and correct your personal data? You have the right to access and correct your personal data. You may do so by contacting us at info@vision-things.com.",
    },
    {
      id: 9,
      title: "How do you opt out of receiving email marketing?",
      description:
        "You can opt out of receiving email marketing by clicking on the unsubscribe link in any email we send to you.",
    },
    {
      id: 10,
      title: "How can you contact us?",
      description:
        "If you have any questions or concerns about our privacy policy, please feel free to contact us at info@vision-things.com.",
      list: [],
    },
    {
      id: 11,
      title: "Amendments to the Privacy Policy",
      description:
        "We may amend our Privacy Policy from time to time. If we make any significant changes, we will notify you by posting a notice on our website.",
      list: [],
    },
    {
      id: 12,
      title: "",
      description: "All rights reserved",
      list: [],
    },
  ];
  return (
    <Section>
      <Container>
        <Box py={5}>
          <Box display={"flex"} justifyContent={"center"} mb={5}>
            <Title>
              <Typography textAlign={"center"} variant="h3" color={"white"}>
                Privacy & Policy
              </Typography>
            </Title>
          </Box>
          {paragraphs.map((p) => (
            <Box key={p.id} mb={2}>
              <Typography variant="h5" color={"white"}>
                {p.title}
              </Typography>
              <Typography>{p.description}</Typography>
              <ul>
                {p.list?.map((e, index) => (
                  <li key={index}>
                    <Typography>{e}</Typography>
                  </li>
                ))}
              </ul>
              <Typography>{p?.anotherDiscription}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Section>
  );
};

export default Policy;
