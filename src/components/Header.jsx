import React from "react";
import logo from "../assests/logo.png";
import {
  Box,
  Heading,
  useColorModeValue,
  chakra,
  ChakraProvider,
  Image,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ToggleColorMode from "./ToggleColorMode";

function Header() {
  const background = useColorModeValue("#ffffff", "#1A202C");
  const shadow = useColorModeValue(
    "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
    "gray 0px 0.5px 3px;"
  );
  const color = useColorModeValue("#1A202C", "#FAF9F6");
  return (
    <Box
      as="header"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-around"}
      h={"15vh"}
      position={"fixed"}
      w={"100%"}
      top={"0"}
      bg={background}
      zIndex={"5"}
      color={"black"}
      shadow={shadow}
    >
      <Heading as="h2">
        <Link to={"/"}>
          <Image w={"30%"} h={"20%"} src={logo} alt="" />
        </Link>
      </Heading>
      <Box
        fontWeight={"400"}
        w={{ base: "30vw", sm: "55vw" }}
        display={"flex"}
        justifyContent={"space-between"}
        color={color}
        fontSize={"1.1rem"}
      >
        <Link to="/">Home</Link>
        <Link to="/About">Our Story</Link>
        <Link to="/Contact">Get in Touch</Link>
        <Link to="/Clients">Partners & Experiences</Link>
        <Link to="/Destinations">Our Destinations</Link>
      </Box>
      <ToggleColorMode />
    </Box>
  );
}

export default Header;
