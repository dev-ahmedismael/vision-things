import SOS from "@/templates/SOS";
import Title from "@/templates/Title";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const OurTeam = () => {
  const team = [
    {
      id: 1,
      title: "Eng. Hattan Ashour",
      job: "Chairman of the Board and founder of VisionThings",
      description:
        "Chairman of the Board and founder of VisionThings, he has extensive experience in the fields of networks and information technology.",
      imgUrl: "/images/team/eng_hattan.png",
      boxColor: "linear-gradient(to bottom,#8B60ED,#B372BD)",
    },
    {
      id: 2,
      title: "Eng. Ali Fathy",
      job: "Vice Chairman and Network Engineer",
      description:
        "Systems and information technology engineer and vice chairman of the board of directors.",
      boxColor: "linear-gradient(to bottom,#6EDCC4,#1AAB8B)",
    },
    {
      id: 3,
      title: "Eng. Assem Osama",
      job: "UI UX & Front-end Developer",
      description:
        "Works in the field of design, defining customer requirements, designing and programming external interfaces.",
      imgUrl: "/images/team/eng_assem.png",
      boxColor: "linear-gradient(to bottom,#DB678D,#EC454F)",
    },
    {
      id: 4,
      title: "Eng. Samir Alaa",
      job: "Back-end Developer",
      description:
        "Works in the structural programming of websites and programming the internal functions of the program.",
      boxColor: "linear-gradient(to bottom,#21C8F6,#637BFF)",
    },
    {
      id: 5,
      title: "Eng. Ahmed Ismael",
      job: "Front-end Developer",
      description:
        "Responsible for developing new user-facing features, determining the structure and design of web pages.",
      imgUrl: "/images/team/eng_ahmed.png",
      boxColor:
        "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
    },
  ];
  return (
    <SOS>
      <section className="section-with-cards">
        <Container>
          <Box display={"flex"} justifyContent={"center"} pt={10} mb={10}>
            <Title>
              <Typography variant="h3" textAlign={"center"} color={"white"}>
                Our Team
              </Typography>
            </Title>
          </Box>

          <Grid container spacing={5} justifyContent={"center"}>
            {team.map((member) => (
              <Grid key={member.id} item xs={12} sm={6}>
                <SOS>
                  <Box
                    bgcolor={"#0c1933"}
                    borderRadius={5}
                    p={3}
                    sx={{
                      "&:hover": {
                        transform: "scale(1.1)",
                        transition: "0.3s all",
                      },
                    }}
                    className="centered-section"
                  >
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={5}>
                        <Box
                          sx={{ background: member.boxColor }}
                          borderRadius={5}
                          height={200}
                          overflow={"hidden"}
                        >
                          {member.imgUrl && (
                            <img
                              src={member.imgUrl}
                              alt={member.title}
                              width={"100%"}
                              height={200}
                            />
                          )}
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={7}>
                        <Box>
                          <Typography color="white" variant="h5">
                            {member.title}
                          </Typography>
                          <Typography color="#197771" variant="h6" mb={3}>
                            {member.job}
                          </Typography>
                          <Typography>{member.description}</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </SOS>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </SOS>
  );
};

export default OurTeam;
