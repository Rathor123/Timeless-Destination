import React from "react";
import DestinationCard from "./DestinationCard";
import { Heading, Text, VStack } from "@chakra-ui/react";

function Destinations() {
  return (
    <>
      <VStack marginTop={{ base: "10%", md: "10%" }}>
        <Heading>Iconic Destination Weddings for Indian Clients</Heading>
        <Text>
          journey to the world's most famous destinations, designed meticulously
          to create your dream Indian wedding—a beautiful blend of global charm
          and Indian traditions.
        </Text>
      </VStack>
      <DestinationCard />
    </>
  );
}

export default Destinations;
