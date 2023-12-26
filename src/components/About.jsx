import {
  Box,
  Container,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import collaborate from "../assests/collaborate.svg";
import mission from "../assests/mission.svg";
import story from "../assests/story.svg";
import aboutus from "../assests/about us.jpg";

function About() {
  return (
    <>
      <Image m={"10%  auto 0"} src={aboutus} />
      <HStack
        w={"full"}
        display={"flex"}
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent={"space-evenly"}
      >
        <VStack w={"40vw"}>
          <Heading
            as="h2"
            fontSize="3xl"
            mb={4}
            borderBottom={"2px  solid"}
            borderBottomColor={"blue.200"}
          >
            Our Journey
          </Heading>
          <Text textAlign={"justify"} w={{ base: "75vw", lg: "40vw" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            ullam accusantium placeat, explicabo harum repellat esse
            necessitatibus officia similique, eaque libero distinctio odit
            voluptatibus? Nostrum odit fugiat perspiciatis harum repellendus
            quisquam minima facere. Accusamus, itaque saepe repudiandae sapiente
            pariatur nulla vitae odit magni nostrum sint. Ipsa reiciendis
            delectus modi consequuntur. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla suscipit, nunc ut lacinia eleifend, arcu odio
            dictum dolor.
          </Text>
        </VStack>
        <Box
          mt={8}
          h={{ base: "40vh", lg: "65vh" }}
          w={{ base: "40vh", lg: "65vh" }}
          bg="blue.200"
          borderRadius="full"
          boxShadow="lg"
        >
          <Image src={story} />
        </Box>
      </HStack>

      <HStack
        w={"full"}
        display={"flex"}
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent={"space-evenly"}
      >
        <Box
          mt={8}
          h={{ base: "40vh", lg: "65vh" }}
          w={{ base: "40vh", lg: "65vh" }}
          bg="orange.200"
          borderRadius="full"
          boxShadow="lg"
        >
          <Image src={mission} />
        </Box>
        <VStack w={"40vw"}>
          <Heading
            as="h2"
            fontSize="3xl"
            mb={4}
            borderBottom={"2px  solid"}
            borderBottomColor={"orange.200"}
          >
            Purpose & Values
          </Heading>

          <Text textAlign={"justify"} w={{ base: "75vw", lg: "40vw" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            ullam accusantium placeat, explicabo harum repellat esse
            necessitatibus officia similique, eaque libero distinctio odit
            voluptatibus? Nostrum odit fugiat perspiciatis harum repellendus
            quisquam minima facere. Accusamus, itaque saepe repudiandae sapiente
            pariatur nulla vitae odit magni nostrum sint. Ipsa reiciendis
            delectus modi consequuntur. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla suscipit, nunc ut lacinia eleifend, arcu odio
            dictum dolor.
          </Text>
        </VStack>
      </HStack>
      <HStack
        w={"full"}
        m={"0 0 5% 0"}
        display={"flex"}
        justifyContent={"space-evenly"}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <VStack w={"40vw"}>
          <Heading
            as="h2"
            fontSize="3xl"
            mb={4}
            borderBottom={"2px  solid"}
            borderBottomColor={"green.200"}
          >
            Future Outlook
          </Heading>
          <Text textAlign={"justify"} w={{ base: "75vw", lg: "40vw" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            ullam accusantium placeat, explicabo harum repellat esse
            necessitatibus officia similique, eaque libero distinctio odit
            voluptatibus? Nostrum odit fugiat perspiciatis harum repellendus
            quisquam minima facere. Accusamus, itaque saepe repudiandae sapiente
            pariatur nulla vitae odit magni nostrum sint. Ipsa reiciendis
            delectus modi consequuntur. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla suscipit, nunc ut lacinia eleifend, arcu odio
            dictum dolor.
          </Text>
        </VStack>
        <Box
          mt={8}
          h={{ base: "40vh", lg: "65vh" }}
          w={{ base: "40vh", lg: "65vh" }}
          bg="green.200"
          borderRadius="full"
          boxShadow="lg"
        >
          <Image src={collaborate} />
        </Box>
      </HStack>
    </>
  );
}

export default About;
