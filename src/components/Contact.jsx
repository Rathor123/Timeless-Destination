import {
  Container,
  Heading,
  Text,
  VStack,
  Icon,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log("Form data submitted:", formData);
  };
  return (
    <>
      <Box
        filter={"blur(2.5px)"}
        backgroundImage={
          "url(https://www.iai.co.il/drupal/sites/default/files/2022-02/Contact%20us.jpg)"
        }
        backgroundPosition={"center"}
        backgroundRepeat={"no-repeat"}
        height={"65vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        position={"relative"}
      ></Box>
      <Container maxW="xl">
        {/* Section 1 - Contact Information */}
        <Box
          mt={8}
          p={4}
          bg="blue.200"
          borderRadius="md"
          boxShadow="lg"
          color="white"
          textAlign="center"
        >
          <Heading as="h2" fontSize="3xl" mb={4}>
            Contact Information
          </Heading>
          <Icon
            as={FaPhone}
            color={"var(--chakra-colors-chakra-body-text)"}
            fontSize="3xl"
            mb={2}
          />
          <Text>Phone: +91 97174 30005</Text>
          <Icon
            as={FaEnvelope}
            color={"var(--chakra-colors-chakra-body-text)"}
            fontSize="3xl"
            mt={4}
            mb={2}
          />
          <Text>Email: contact@example.com</Text>
          <Icon
            as={FaLocationArrow}
            color={"var(--chakra-colors-chakra-body-text)"}
            fontSize="3xl"
            mt={4}
            mb={2}
          />
          <Text>
            Address: Novotel Pullman 5th Floor, Caddie Commercial Tower,
            Aerocity, New Delhi, Delhi 110037
          </Text>
        </Box>

        {/* Section 2 - Contact Form */}
        <Box
          mt={8}
          p={4}
          bg="green.200"
          borderRadius="md"
          boxShadow="lg"
          textAlign="center"
          m={"3% 0"}
        >
          <Heading as="h2" fontSize="3xl" mb={4}>
            Contact Form
          </Heading>
          <Box p={4}>
            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl id="name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                  />
                </FormControl>
                <FormControl id="message" isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    size="sm"
                  />
                </FormControl>
                <Button
                  type="submit"
                  colorScheme="blue"
                  size="sm"
                  isLoading={false}
                >
                  Submit
                </Button>
              </VStack>
            </form>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Contact;
