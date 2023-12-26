import {
  Box,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import images from "./clientsimages";
import men from "../assests/men.jpg";
import men2 from "../assests/men2.jpg";
import women from "../assests/women.jpg";
import client from "../assests/client.jpg";

function Clients() {
  return (
    <>
      <Image marginTop={"15vh"} src={client} w={"100%"} h={"70vh"} />
      <Box p={4} marginTop={"10%"} minHeight={"80vh"}>
        <Heading as="h1" textAlign={"center"} mb={4}>
          Our Clients
        </Heading>
        <Text textAlign={"center"} marginBottom={"3%"}>
          We are proud to work with a diverse range of clients from various
          industries. Here are some of our valued clients:
        </Text>
        <Grid
          bg={"white"}
          gap={"5"}
          gridTemplateColumns={{
            base: "auto auto ",
            md: "auto auto auto auto",
            lg: "auto auto auto auto  auto",
          }}
        >
          {images.map((value, index) => (
            <GridItem key={index}>
              <Image src={value} />
            </GridItem>
          ))}
        </Grid>
        <Box marginTop={"6rem"}>
          <Box display={"grid"} placeItems={"center"}>
            <Heading marginBottom={"1.5rem"} as={"h1"}>
              TESTIMONIALS
            </Heading>
            <Heading as={"h2"} color={"brand.five"}>
              WHAT THEY SAY ABOUT US
            </Heading>
            <Divider
              marginTop={"12px"}
              h={"3px"}
              background={"brand.main"}
              w={"30vw"}
            />
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={{ base: "column", lg: "row" }}
          w={"95vw"}
          justifyContent={"space-evenly"}
          margin={"5vh 0 45vh 0"}
        >
          <Box position={"relative"}>
            <Text
              border={"1px solid"}
              w={{ base: "90vw", lg: "30vw" }}
              borderColor={"brand.main"}
              padding={"35px 35px 45px 35px"}
            >
              we're thrilled with the exceptional representation by the wedding
              company. Their dedication to showcasing our venue for Indian
              weddings is commendable, driving substantial bookings and
              presenting our property magnificently.
            </Text>
            <Box
              position={{ base: "static", lg: "absolute" }}
              h={{ base: "0", lg: "50vh" }}
              top={"180px"}
              w={{ base: "90vw", lg: "15vw" }}
              left={"70px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              marginBottom={{ base: "70% ", lg: "0" }}
            >
              <Image
                marginBottom={"25px"}
                width={"120px "}
                borderRadius={"full"}
                src={men}
              />
              <Heading fontSize={"1rem"} color={"brand.main"}>
                The Emerald Heights Resort
              </Heading>
              <Text fontWeight={"700"} fontSize={"1rem"}>
                Sales Manager{" "}
              </Text>
            </Box>
          </Box>
          <Box position={"relative"}>
            <Text
              border={"1px solid"}
              w={{ base: "90vw", lg: "30vw" }}
              borderColor={"brand.main"}
              padding={"35px 35px 45px 35px"}
            >
              partnering with the wedding representation company has been a
              game-changer. Their strategic approach and market insights have
              significantly boosted our presence in the Indian wedding segment,
              elevating our bookings and brand recognition.
            </Text>
            <Box
              position={{ base: "static", lg: "absolute" }}
              h={{ base: "0", lg: "50vh" }}
              top={"180px"}
              w={{ base: "90vw", lg: "15vw" }}
              left={"70px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Image
                height={"120px "}
                marginBottom={"25px"}
                width={"120px "}
                borderRadius={"full"}
                src={men2}
              />
              <Heading fontSize={"1rem"} color={"brand.main"}>
                Sapphire Sands Retreat
              </Heading>
              <Text fontWeight={"700"} fontSize={"1rem"}>
                General Manager
              </Text>
            </Box>
          </Box>
          <Box position={"relative"}>
            <Text
              border={"1px solid"}
              w={{ base: "90vw", lg: "30vw" }}
              borderColor={"brand.main"}
              padding={"35px 35px 45px 35px"}
            >
              The experience with the wedding representation firm as Oakwood
              Manor's client has been exemplary. Their tailored marketing
              strategies and adept understanding of the Indian wedding market
              have propelled our venue to prominence.
            </Text>
            <Box
              position={{ base: "static", lg: "absolute" }}
              h={{ base: "0", lg: "50vh" }}
              top={"180px"}
              w={{ base: "90vw", lg: "15vw" }}
              left={"70px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Image
                height={"120px "}
                marginBottom={"25px"}
                width={"120px "}
                borderRadius={"full"}
                src={women}
              />
              <Heading fontSize={"1rem"} color={"brand.main"}>
                Opulent Oasis Palace
              </Heading>
              <Text fontWeight={"700"} fontSize={"1rem"}>
                Marketing Director
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Clients;
