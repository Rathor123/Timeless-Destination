import React from "react";
import {
  Card,
  CardBody,
  Grid,
  Text,
  Heading,
  Image,
  Link,
  Stack,
} from "@chakra-ui/react";
import bali from "../assests/Destinations/bali.webp";
import thailand from "../assests/Destinations/thialand.png";
import malaysia from "../assests/Destinations/malaysia.jpg";
import UAE from "../assests/Destinations/UAE.jpg";
import vietnam from "../assests/Destinations/Vietnam.jpg";
import burma from "../assests/Destinations/burma.jpg";
import hongkong from "../assests/Destinations/hong-kong.webp";
import japan from "../assests/Destinations/japan.jpg";
import jordan from "../assests/Destinations/jordan.jpg";
import macau from "../assests/Destinations/macau.jpg";
import maldives from "../assests/Destinations/maldives.webp";
import nepal from "../assests/Destinations/nepal.jpg";
import southkorea from "../assests/Destinations/south-korea.webp";
import srilanka from "../assests/Destinations/sri-lanka.webp";
import turkey from "../assests/Destinations/tukey.avif";

function DestinationCard() {
  const destinations = [
    {
      name: "BALI",
      image: bali,
      about:
        "Enchanting island paradise with rich culture, beaches, and spiritual allure",
    },
    {
      name: "THAILAND",
      image: thailand,
      about:
        "Vibrant culture, stunning beaches, delicious food, and warm hospitality await",
    },
    {
      name: "U.A.E",
      image: UAE,
      about:
        "Futuristic cities, desert landscapes, luxury, and cultural diversity thrive here",
    },
    {
      name: "VIETNAM",
      image: vietnam,
      about:
        "Lush landscapes, rich history, vibrant cities, and incredible cuisine beckon",
    },
    {
      name: "MALAYSIA",
      image: malaysia,
      about:
        "Cultural fusion, stunning rainforests, diverse cuisine, and dynamic cityscapes thrive",
    },
    {
      name: "BURMA",
      image: burma,
      about:
        "Ancient culture, diverse landscapes, and spiritual heritage, embodies colorful ",
    },
    {
      name: "HONG KONG",
      image: hongkong,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp",
    },
    {
      name: "JAPAN",
      image: japan,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp",
    },
    {
      name: "JORDAN",
      image: jordan,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp",
    },
    {
      name: "MACAU",
      image: macau,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp",
    },
    {
      name: "MALDIVES",
      image: maldives,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp",
    },
    {
      name: "NEPAL",
      image: nepal,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp",
    },
    {
      name: "SOUTH-KOREA",
      image: southkorea,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp",
    },
    {
      name: "SRI LANKA",
      image: srilanka,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp",
    },
    {
      name: "TURKEY",
      image: turkey,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp",
    },
  ];

  return (
    <Grid
      gridTemplateColumns={{
        base: "auto",
        md: "auto auto auto ",
        lg: "auto auto auto auto",
        sm: "auto ",
      }}
    >
      {destinations.map((destination, index) => (
        <Card maxW="sm" display={"inline-block"} m={"25px"}>
          <CardBody>
            <Image
              h={"200px"}
              src={destination.image}
              alt=""
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{destination.name}</Heading>
              <Text>
                {destination.about}
                <span>
                  <Link
                    target="_blank"
                    // href={destination.link}
                    color="blue.600"
                  >
                    more...
                  </Link>
                </span>
              </Text>
            </Stack>
          </CardBody>
        </Card>
      ))}
    </Grid>
  );
}

export default DestinationCard;
