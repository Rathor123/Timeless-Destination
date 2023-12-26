import { BiSun, BiMoon } from "react-icons/bi";
import React from "react";
import { Button, useColorMode } from "@chakra-ui/react";

function ToggleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Button onClick={toggleColorMode}>
        {colorMode === "dark" ? (
          <BiSun color="orange" />
        ) : (
          <BiMoon color="darkblue" />
        )}
      </Button>
    </>
  );
}

export default ToggleColorMode;
