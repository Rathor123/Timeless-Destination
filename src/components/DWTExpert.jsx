import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";

function DWTExpert({ Icon, heading, para }) {
  const style = {
    fontSize: "60px",
    margin: "auto",
    padding: "5px",
    background: `blue.200`,
  };
  return (
    <>
      <Box
        m={{ base: "0", lg: "6rem 0 6rem 0" }}
        w={{ base: "70vw", lg: "25vw" }}
        textAlign={"center"}
        overflow={"hidden"}
        _hover={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px" }}
        p={{ base: "0", lg: "15px 0" }}
      >
        <Icon style={style} />
        <Heading fontFamily={"Nunito"} as={"h6"} size={"md"} m={"25px"}>
          {heading}
        </Heading>
        <Text m={"15px"}>{para}</Text>
        <Button variant="solid" colorScheme={"purple"}>
          Read more
        </Button>
      </Box>
    </>
  );
}

export default DWTExpert;
