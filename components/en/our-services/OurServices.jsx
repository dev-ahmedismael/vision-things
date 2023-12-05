import SectionWithCards from "@/templates/SectionWithCards";
import { Box } from "@mui/material";
import React from "react";

const OurServices = () => {
  const section = {
    description:
      "The Vision Things Company offers many technical and informational services, networks and other services that you can view and learn more about.You can find out additional information about each service that is also provided by the Vision Things Company.",
    cards: [
      {
        id: 1,
        title: "Artificial Intelligence AI ",
        description:
          "Artificial intelligence is the simulation of human intelligence processes by machines or computer systems.",
        boxColor: "linear-gradient(to bottom,#8B60ED,#B372BD)",
        url: "/en/ai",
      },
      {
        id: 2,
        title: "Computer Vision CR",
        description:
          " Computer vision is a field of artificial intelligence (AI) that enables computers and systems to derive meaningful information from digital images, videos and other visual inputs — and take actions or make recommendations based on that information.",
        boxColor: "linear-gradient(to bottom,#21C8F6,#637BFF)",
        url: "/en/cr",
      },
      {
        id: 3,
        title: "Robots ",
        description:
          "A robot is a type of automated machine that can execute specific tasks with little or no human intervention. ",
        boxColor: "linear-gradient(to bottom,#6EDCC4,#1AAB8B)",
        url: "/en/robots",
      },
      {
        id: 4,
        title: "Augmented Reality AR ",
        description:
          "Augmented reality is an enhanced, interactive version of a real-world environment achieved through digital visual elements, sounds, and other sensory stimuli via holographic technology. ",
        boxColor: "linear-gradient(to bottom,#F19A1A,#FFC73C)",
        url: "/en/ar",
      },
      {
        id: 5,
        title: "Internet of Things IOT ",
        description:
          " the network of physical objects— “things”—that are embedd with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the internet. ",
        boxColor: "linear-gradient(to bottom,#DB678D,#EC454F)",
        url: "/en/iot",
      },
      {
        id: 6,
        title: "Technology and Information Management ",
        description:
          "Vision of Things provides information technology management services on behalf of others efficiently and safely. ",
        boxColor: "linear-gradient(to bottom,#21C8F6,#637BFF)",
        url: "/en/technology-and-information-management",
      },
      {
        id: 7,
        title: "Network Extension and Maintenance ",
        description:
          "Network extension design is the process of planning and implementing a new or updated network system. This includes identifying business needs, selecting the appropriate equipment, and installing the system. ",
        boxColor: "linear-gradient(to bottom,#8B60ED,#B372BD)",
        url: "/en/network-extension-and-maintenance",
      },
      {
        id: 8,
        title: "Call Center Management ",
        description:
          "(CCaaS) is a cloud service that provides a set of control and management tools for call centers. These tools can include automated call answering, intelligent call routing, analytics, and employee management. ",
        boxColor: "linear-gradient(to bottom,#21C8F6,#637BFF)",
        url: "/en/call-center-management",
      },
      {
        id: 9,
        title: "IT Equipment Maintenance ",
        description:
          "Information technology devices are among the most important assets that companies have, as they enable employees to access the information and applications they need to get their work done. ",
        boxColor: "linear-gradient(to bottom,#6EDCC4,#1AAB8B)",
        url: "/en/it-equipment-maintenance",
      },
      {
        id: 10,
        title: "IT System Maintenance ",
        description:
          "IT system maintenance is the process of keeping IT systems in good working order. ",
        boxColor: "linear-gradient(to bottom,#F19A1A,#FFC73C)",
        url: "/en/it-system-maintenance",
      },
      {
        id: 11,
        title: "Supply and Installing Technical Devices ",
        description:
          "The supply, installation, and operation of technical equipment is an important part of any business. Businesses rely on technical equipment to operate their daily operations. ",
        boxColor: "linear-gradient(to bottom,#DB678D,#EC454F)",
        url: "/en/supply-and-installing-technical-devices",
      },
      {
        id: 12,
        title: "VPN Site Linkage Services ",
        description:
          "We provide the latest web connectors by connecting all locations and branches into a single secure network. ",
        boxColor: "linear-gradient(to bottom,#21C8F6,#637BFF)",
        url: "/en/vpn-site-linkage-services",
      },
      {
        id: 13,
        title: "Backup Services ",
        description:
          "Our belief in the importance of our clients' information, we provide them with a secure copying service both within their local network and the cloud network. ",
        boxColor: "linear-gradient(to bottom,#8B60ED,#B372BD)",
        url: "/en/backup-services",
      },
      {
        id: 14,
        title: "Communication Centers ",
        description:
          "We install, extend and configure network telephone devices to communicate with members of the network, the company or branches within the network itself via the network phone, in addition to a service through which establishments receive customer calls from outside the network via phone or mobile via call centers. ",
        boxColor: "linear-gradient(to bottom,#21C8F6,#637BFF)",
        url: "/en/communication-centers",
      },
      {
        id: 15,
        title: "Cameras and Smart Home Services ",
        description:
          "Creating, designing and connecting networks of cameras, smart homes and remote control. ",
        boxColor: "linear-gradient(to bottom,#6EDCC4,#1AAB8B)",
        url: "/en/cameras-and-smart-home-services",
      },
      {
        id: 16,
        title: "Musadiqa for Online Signature ",
        description:
          "It is an electronic platform that helps individuals and companies issue letters and contracts and add their identities, seals and signatures to them easily and easily. ",
        boxColor: "linear-gradient(to bottom,#F19A1A,#FFC73C)",
        url: "/en/musadiqa-for-online-signature",
      },
    ],
    hasBtn: false,
    section: "our-services",
  };
  return (
    <Box>
      <SectionWithCards
        description={section.description}
        cards={section.cards}
        hasBtn={section.hasBtn}
        section={section.section}
      />
    </Box>
  );
};

export default OurServices;
