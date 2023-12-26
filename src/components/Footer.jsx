import { Box, Flex, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import React from "react";

function Footer() {
  return (
    <>
      <Box as="footer" bg="gray.900" color="white" py="4">
        <Flex
          direction={{ base: "column", md: "row" }}
          maxW={{ base: "90%", md: "80%", xl: "1200px" }}
          mx="auto"
          justify="space-between"
          align="center"
        >
          <Stack spacing={4} direction={{ base: "column", md: "row" }}>
            <Link href="#" textDecoration="none">
              Home
            </Link>
            <Link href="#" textDecoration="none">
              About
            </Link>
            <Link href="#" textDecoration="none">
              Services
            </Link>
            <Link href="#" textDecoration="none">
              Contact
            </Link>
          </Stack>
          <Stack spacing={4} direction="row">
            <Link href="#" textDecoration="none">
              <Icon as={FaFacebook} boxSize={6} />
            </Link>
            <Link href="#" textDecoration="none">
              <Icon as={FaTwitter} boxSize={6} />
            </Link>
            <Link
              href="https://www.instagram.com/wed.rep/"
              textDecoration="none"
              target="_blank"
            >
              <Icon as={FaInstagram} boxSize={6} />
            </Link>
          </Stack>
        </Flex>
        <Box mt="4" textAlign="center">
          <Text fontSize="sm">
            &copy; 2023 Your Company Name. All rights reserved.
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
