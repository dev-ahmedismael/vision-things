import Section from "@/templates/Section";
import Title from "@/templates/Title";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const TermsAndConditions = () => {
  const paragraphs = [
    {
      id: 1,
      title: "",
      description:
        "These Terms and Conditions are hereby referred to as the terms dictated to govern the use of Vision-Things by the main website of Vision-Things or any part thereof, including sub-sites or reference sites of properties herein referred to as Vision-Things by maintained by reserves the right to modify these Terms unilaterally or upon change in regulatory, judicial, legislative or regional context. You hereby, as Users, indicate your acceptance of these Terms and, accordingly, you are bound by these Terms. If you do not agree to these Terms of Use, please do not use this website or any affiliated mobile applications.",
    },
    {
      id: 2,
      title: "",
      description:
        'Thank you for using the Vision Things website. BY ACCESSING OR USING THE VISION THINGS SITE, YOU AGREE TO BE BOUND BY THESE TERMS AND CONDITIONS ("Terms"). IF YOU DO NOT AGREE TO THESE TERMS, YOU ARE NOT AUTHORIZED TO USE THE SEE THINGS SITE. Please note that these Terms may change from time to time. Any changes will be posted on this page, and will be effective immediately upon posting. Please check this page regularly for the latest changes.',
    },
    {
      id: 3,
      title: "Acceptable Terms of Use:",
      description: "",
      list: [
        "The vision-things website is not subject to any illegal breach, distortion, tampering, traffic dumping or overloading of any kind, in the event of a defect or any type of inaccuracy noted. vision-things must be notified immediately by vision-things.",
        "Users agree not to publish any tools created through vision-things on websites, or through census, mining, aggregation or data analysis of any kind, as they were not designed or intended to be disclosed.",
        "Vision-things shall exercise due diligence and shall not be liable for any breach of the terms beyond reasonable circumstances, otherwise the court may bring charges against it.",
        "Users may not use vision-things by sites as a platform to post spam or act in any way deemed morally inappropriate, including (age, gender, color, religion, race, ancestry, citizenship, disability, and social status.) View the Saudi Anti-Crime Law.",
        "Access to vision-things may occasionally be suspended or restricted by websites for operational reasons such as maintenance or the introduction of new facilities or products.",
        "Vision-things reserves the right at any time and without prior notice to modify, edit, delete, suspend or discontinue, temporarily or permanently, any content, including any products available through the vision-things website.",
        "Vision-things may, in its sole discretion, cancel, terminate or suspend access to or registration to the vision-things site by Sites upon manifest breach of the Terms, without notice to users.",
        "Any content written or uploaded to vision-things from websites may be subject to scrutiny and may be deleted if found to be harmful without any further notice to users.",
      ],
    },
    {
      id: 4,
      title: "By for content and copyright",
      description: "",
      list: [
        "Content provided by vision-things by including information, data, materials, text, designs, graphics, photos, videos, photos, applications, software, audio and other files, selected and displayed, is owned by vision-things by or licensed to vision-things by through third parties. It is protected by copyright, trademark, and other intellectual property rights as applicable and provided for your own use only. Republishing or redistributing the Content, including by framing or similar means, is prohibited.",
        "Users accept absolute responsibility for all content including comments, files, materials, suggestions and ideas that are uploaded or posted on vision-things by sites or transmitted to other users through vision-things sites by sites.",
      ],
    },
    {
      id: 5,
      title: "Compensation",
      description: "",
      list: [
        "Users shall indemnify vision-things by or any User affected by the breach of the Terms as a fixed liability in accordance with the provisions of the Court.",
      ],
    },
    {
      id: 6,
      title: "Applicable law",
      description: "",
      list: [
        "These Terms are governed by the laws of the Kingdom of Saudi Arabia and subject to international cybercrime laws. Any disputes arising from the use of vision-things shall be submitted to the exclusive jurisdiction of the Saudi courts. vision-things reserves the right to bring an action to the courts of the country in which you reside.",
        "Each provision of these Terms operates separately. If any court or competent authority decides that any of them are unlawful or unenforceable, the remaining provisions will remain in full force and effect.",
      ],
    },
    {
      id: 7,
      title: "Acceptable use",
      description:
        "You may use Vision Things for lawful purposes only. You are prohibited from using See Things for any illegal or unauthorized purpose, including, but not limited to: Post or distribute any offensive, illegal, abusive, defamatory, discriminatory, threatening, pornographic or indecent material. Post or distribute any material that infringes the rights of any third party, including copyright, trademark, confidentiality and proprietary rights. Upload or distribute any viruses, malware or other software that may harm the Site or other users' equipment. Conduct any activities that may damage, disable, or adversely affect the Seeing Objects or Devices of other Users.",
    },
    {
      id: 8,
      title: "Intellectual property rights",
      description:
        "All content on the Object Vision Site, including, without limitation, text, images, graphics, trademarks and logos, is the exclusive property of Object Vision or its suppliers. You agree not to copy, distribute, reproduce, display, publish, transmit, modify, or create derivative works from any of these materials in any form or by any means, without the prior written permission of See Things.",
    },
    {
      id: 9,
      title: "Links",
      description:
        "You may create a link to the home page of the See Things website, provided you do so in a way that is fair and legal and does not damage the reputation of Things See, its products or services. You are not permitted to create a link to any other page of the See Things Site without the prior written permission of See Things.",
    },
    {
      id: 10,
      title: "Warranties",
      description:
        'THE SEE THINGS WEBSITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. See-Things makes no warranties, express or implied, with respect to See-Things or the materials on See-Things, including, without limitation, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
    },
    {
      id: 11,
      title: "Limitation of liability",
      description:
        "In no event shall Object Vision or its suppliers be liable for any direct, indirect, incidental, consequential, special or punitive damages, including, but not limited to, loss of profits, revenue, data or use, arising out of OR IN CONNECTION WITH THE HOW TO USE THE OBJECTIVE SITE, EVEN IF THE OBJECTIVES WEBSITE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. ending Vision Things may terminate your right to use See Things at any time, for any reason, including, but not limited to, your violation of these Terms. Upon termination of your right to use the See Things Site, your account and all data and information associated with it will be terminated and deleted from the See Things database.",
    },
    {
      id: 12,
      title: "Applicable law",
      description:
        "These Terms shall be governed and construed in accordance with the laws of the Kingdom of Saudi Arabia, without regard to the rules of conflict of laws. You agree to submit to the exclusive jurisdiction of the courts located in the Kingdom of Saudi Arabia.",
    },
    {
      id: 13,
      title: "",
      description: "All rights reserved",
    },
  ];
  return (
    <Section>
      <Container>
        <Box py={5}>
          <Box display={"flex"} justifyContent={"center"} mb={5}>
            <Title>
              <Typography textAlign={"center"} variant="h3" color={"white"}>
                Terms & Conditions
              </Typography>
            </Title>
          </Box>
          {paragraphs.map((p) => (
            <Box key={p.id}>
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
            </Box>
          ))}
        </Box>
      </Container>
    </Section>
  );
};

export default TermsAndConditions;
