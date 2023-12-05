import React from "react";
import SectionWithCards from "@/templates/SectionWithCards";

const HomeOurServices = () => {
  const section = {
    title: "Our Services",
    description:
      "The Vision Things Company offers many technical and informational services, networks and other services that you can view and learn more about",
    cards: [
      {
        id: 1,
        title: "Development and research",
        description:
          "The company works to provide the latest technical solutions through R&D in the following fields AI, CR, Robots and IOT",
        boxColor: "linear-gradient(to bottom,#8B60ED,#B372BD)",
        url: "/en/our-services",
      },
      {
        id: 2,
        title: "Network Solutions",
        description:
          "Network extension design is the process of planning and implementing a new or updated network system. This includes identifying business needs",
        boxColor: "linear-gradient(to bottom,#21C8F6,#637BFF)",
        url: "/en/our-services",
      },
      {
        id: 3,
        title: "Business solutions",
        description:
          "Creating websites and technical solutions to facilitate business management operations and make them administratively more professional",
        boxColor: "linear-gradient(to bottom,#6EDCC4,#1AAB8B)",
        url: "/en/our-services",
      },
    ],
    hasBtn: true,
    btn: "Know More",
    url: "/en/our-services",
  };

  return (
    <SectionWithCards
      title={section.title}
      description={section.description}
      cards={section.cards}
      hasBtn={section.hasBtn}
      btn={section.btn}
      url={section.url}
    />
  );
};

export default HomeOurServices;
