import { Box, Flex, Heading, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";

function Welcome() {
  return (
    <>
      <Flex flexDirection={"column"} alignItems={"center"} margin={"4rem auto"}>
        <Heading>Welcome To</Heading>
        <Heading>Wedding Rep Global</Heading>
      </Flex>
      <Box
        display={"flex"}
        width={"100vw"}
        justifyContent={"space-evenly"}
        flexDirection={{ md: "row", base: "column" }}
      >
        <Image
          src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ-eThCbIc65WURRKHxZQ8KR82rAFmeo3rr05g9CQr5nWeoVAloRUvDWfm4U__7Uj0ZCdNfcF2pmgMwr7d96BFcGBxMEJdK"
          w={{ base: "700px", md: "500px", sm: "55vw" }}
          alt="Dan Abramov"
        />

        <Text
          borderLeft={" 2px solid red"}
          textAlign={"justify"}
          w={{ md: "50vw", sm: "70vw" }}
          bg={"green.200"}
          letterSpacing={"0.7"}
          padding={"25px"}
        >
          WedRep Global extends its expertise beyond the borders of India,
          bridging the gap between international hotels and resorts in exotic
          destinations with the Indian market. Our global reach and local
          insight uniquely position us to represent and market these esteemed
          properties to Indian couples seeking international destinations for
          their dream weddings. With a deep understanding of the preferences,
          customs, and expectations of Indian couples, we serve as the conduit
          between these stunning international venues and the discerning Indian
          clientele. Our focus is on showcasing the allure, luxury, and
          distinctive features of each destination, aligning them perfectly with
          the desires and aspirations of couples planning their weddings.
          Collaborating with WedRep Global means accessing a treasure trove of
          international venues that embody diverse cultural experiences,
          stunning landscapes, and unparalleled hospitality. We meticulously
          curate and present these venues to resonate with the Indian market,
          ensuring that couples have a plethora of options for their fairy-tale
          celebrations abroad. Whether it's the idyllic beaches of Bali, the
          cultural richness of Thailand, or the modern elegance of Malaysia, our
          mission is to make these international destinations feel like home for
          Indian couples, offering them a seamless and enchanting experience as
          they embark on their journey towards a destination wedding that
          exceeds their wildest dreams.
        </Text>
      </Box>
    </>
  );
}

export default Welcome;
