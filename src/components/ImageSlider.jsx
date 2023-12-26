// ImageSlider.js
import React, { useState } from "react";
import { Box, Button, Heading, Image } from "@chakra-ui/react";
import background1 from "../assests/background1.jpg";
import background2 from "../assests/background2.jpg";
import background3 from "../assests/background3.jpg";
import background4 from "../assests/background4.jpg";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const images = [background1, background2, background3, background4];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box position="relative">
      <Image
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{
          width: "100%",
          height: "90vh",
          display: "block",
          filter: "grayscale(100%);",
        }}
      />
      <Heading
        as={"h1"}
        position={"absolute"}
        top={"50%"}
        left={"50%"}
        fontSize={{ lg: "3rem", md: "2rem", sm: "1rem" }}
        textTransform={"uppercase"}
        lineHeight={{ sm: "1.5", base: "2" }}
        color={"#fff"}
        background={"#01080ba1"}
        padding={"10px"}
        borderRadius={"5px"}
      >
        your premier choice in hotel representation across India
      </Heading>
      <Button
        background={"gray"}
        position="absolute"
        left="20px"
        top="50%"
        transform="translateY(-50%)"
        onClick={prevSlide}
      >
        <BiLeftArrow />
      </Button>
      <Button
        background={"gray"}
        position="absolute"
        right="20px"
        top="50%"
        transform="translateY(-50%)"
        onClick={nextSlide}
      >
        <BiRightArrow />
      </Button>
    </Box>
  );
}

export default ImageSlider;
