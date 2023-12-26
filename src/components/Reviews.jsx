import React, { useState } from "react";
import {
  Box,
  Image,
  Flex,
  Button,
  Heading,
  Text,
  HStack,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import fact1 from "../assests/facts1.jpeg";
import fact1a from "../assests/fact1.1.jpeg";
import fact1b from "../assests/fact1.2.jpeg";
import fact2 from "../assests/facts2.jpeg";
import fact2a from "../assests/facts2.1.jpg";
import fact2b from "../assests/facts2.2.jpg";
import fact3 from "../assests/facts3.jpeg";
import fact3a from "../assests/fact3.1.jpg";
import fact3b from "../assests/facts3.2.jpg";
import fact4 from "../assests/facts4.jpeg";
import fact6 from "../assests/facts6.jpeg";
const destinations = [
  {
    name: "Scale of Celebrations",
    image: [fact2, fact2a, fact2b],
    description:
      "Indian weddings typically host large gatherings, ranging from 200 to over 1000 guests, providing hotels with an extensive audience for bookings and event spaces.",
  },
  {
    name: "Multi-Day Events",
    image: [fact1, fact1a, fact1b],
    description:
      "These weddings span multiple days, resulting in longer stays and increased room bookings for hotels, creating extended revenue opportunities.",
  },
  {
    name: "Economic Impact",
    image: [fact3, fact3a, fact3b],
    description:
      "The Indian wedding industry is estimated to be worth billions of dollars annually, presenting hotels with a lucrative market for hosting these grand events.",
  },
  {
    name: "Customized Services",
    image: [fact4, fact2, fact2],
    description:
      "Hotels can leverage their expertise to provide specialized packages, catering, décor, and cultural experiences that cater to the specific needs and preferences of Indian weddings.",
  },
  {
    name: "Word-of-Mouth Promotion",
    image: [fact6, fact2, fact2],
    description:
      "Successful execution of grand Indian weddings can lead to positive word-of-mouth marketing, enhancing a hotel's reputation as an ideal venue for such events.",
  },
];

function Reviews() {
  const [currentDestinationIndex, setCurrentDestinationIndex] = useState(0);

  const prevDestination = () => {
    setCurrentDestinationIndex((prevIndex) =>
      prevIndex === 0 ? destinations.length - 1 : prevIndex - 1
    );
  };

  const nextDestination = () => {
    setCurrentDestinationIndex((prevIndex) =>
      prevIndex === destinations.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentDestination = destinations[currentDestinationIndex];

  return (
    <Box margin={"3% auto"}>
      <Heading as="h2" textAlign={"center"} marginBottom={"4%"}>
        Unmatched Representation Success
      </Heading>
      <Flex align="center" justify="center" direction="column">
        <HStack>
          {currentDestination.image.map((value) => {
            return (
              <Image
                src={value}
                alt={currentDestination.name}
                maxH="270px"
                maxW={"450px"}
                m={"13px 0"}
                objectFit="cover"
                transition="transform 0.3s ease"
                _hover={{ transform: "scale(1.1)" }}
              />
            );
          })}
        </HStack>
        <Flex mt={4}>
          <Button
            leftIcon={<ChevronLeftIcon />}
            onClick={prevDestination}
            variant="outline"
            size="sm"
            mr={2}
          >
            Prev
          </Button>
          <Button
            rightIcon={<ChevronRightIcon />}
            onClick={nextDestination}
            variant="outline"
            size="sm"
          >
            Next
          </Button>
        </Flex>
        <Heading mt={4} as="h2" size="xl">
          {currentDestination.name}
        </Heading>
        <Text mt={2}>{currentDestination.description}</Text>
      </Flex>
    </Box>
  );
}

export default Reviews;
