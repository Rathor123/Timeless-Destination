import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
} from "@chakra-ui/react";

const faqs = [
  {
    type: "heading",
    heading: "What is Wedding Rep Global, and what do you specialize in?",
  },
  {
    type: "content",
    content:
      "Wedding Rep Global is an India-based company dedicated to marketing hotels from other countries that are perfect for destination weddings in India. We specialize in promoting unique and lesser-known international wedding venues to Indian couples.",
  },

  {
    type: "heading",
    heading:
      "How can Wedding Rep Global help me plan my destination wedding in India?",
  },
  {
    type: "content",
    content:
      "We make the process easier for you by showcasing international hotels and resorts that offer exceptional wedding experiences. You can explore various options right on our platform and choose the perfect destination for your wedding.",
  },

  {
    type: "heading",
    heading: "Do you offer a variety of international wedding venues?",
  },
  {
    type: "content",
    content:
      "Absolutely! We work with a diverse range of hotels and resorts from around the world, ensuring that you have plenty of options to consider for your dream destination wedding in India.",
  },

  {
    type: "heading",
    heading: "Why should I consider an international destination wedding?",
  },
  {
    type: "content",
    content:
      "International weddings provide a unique and unforgettable experience for couples and their guests. They offer stunning backdrops, cultural diversity, and a chance to create lasting memories.",
  },

  {
    type: "heading",
    heading:
      "Can Wedding Rep Global help with wedding planning beyond just venue selection?",
  },
  {
    type: "content",
    content:
      "While our primary focus is on venue marketing, we also provide resources, tips, and recommendations to help with various aspects of destination wedding planning, such as local vendors, traditions, and legal requirements.",
  },

  {
    type: "heading",
    heading:
      "Are there any additional services Wedding Rep Global provides for couples planning their wedding?",
  },
  {
    type: "content",
    content:
      "We offer destination-specific information, travel guidance, and recommendations to help make your wedding planning journey as smooth as possible.",
  },
];
function Faqs() {
  const [bg, setBG] = useState("#fff");
  return (
    <Box m={"5% 0"}>
      <Heading as="h2" margin={"2% 0"} textAlign={"center"}>
        Questions
      </Heading>
      <Accordion>
        {faqs.map((faq, index) => {
          if (faq.type === "heading") {
            return (
              <AccordionItem key={index}>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      background={bg}
                      fontWeight={"bold"}
                      onClick={() => setBG("#e3e5e8")}
                    >
                      {faq.heading}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {faqs[index + 1].content}
                </AccordionPanel>
              </AccordionItem>
            );
          }
          return null;
        })}
      </Accordion>
    </Box>
  );
}

export default Faqs;
