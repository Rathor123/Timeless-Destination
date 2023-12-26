import { Box, Heading, Text } from "@chakra-ui/react";
import ImageSlider from "./ImageSlider";

import { BsGraphUpArrow } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { TfiLayoutMediaCenterAlt } from "react-icons/tfi";
import { GrWorkshop } from "react-icons/gr";
import { BsPersonLinesFill } from "react-icons/bs";

import { SiMarketo } from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa6";

import { MdOutlineOnlinePrediction } from "react-icons/md";
import { BiShowAlt } from "react-icons/bi";

import DWTExpert from "./DWTExpert";
import Faqs from "./Faqs";
import Welcome from "./Welcome";
import Reviews from "./Reviews";

function Home({ bg }) {
  return (
    <>
      <Box bgSize="cover" minHeight={{ base: "90vh", sm: "40vh" }}>
        <ImageSlider />
      </Box>
      <Welcome />

      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        mt={"5rem"}
        bg={bg}
      >
        <Heading
          as={"h2"}
          textAlign={"center"}
          fontFamily={"Nunito"}
          marginBottom={"2.5rem"}
        >
          {" "}
          Expanded Market Reach{" "}
        </Heading>

        <Text textAlign={"center"} w={"80vw"} margin={"auto"}>
          Discover amplified visibility and increased bookings. Partnering with
          us expands your market reach, ensuring your venue stands out in the
          vibrant tapestry of destination weddings, captivating couples seeking
          extraordinary experiences.
        </Text>
        <Box
          display={"Grid"}
          gridTemplateColumns={"auto auto auto"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={{ base: "column", lg: "row" }}
        >
          <DWTExpert
            color={"purple"}
            Icon={BsGraphUpArrow}
            heading="Growth"
            para="Dynamic economy, tech innovation, diverse culture fueling progress, attracting global investments and talents."
          />
          <DWTExpert
            color={"green"}
            Icon={SiMarketo}
            heading="Tailored Markting Campaigns"
            para="Craft targeted marketing strategies highlighting the property's wedding-specific amenities, cultural experiences, and unique features appealing to Indian couples."
          />
          <DWTExpert
            color={"orange"}
            Icon={FaHandshake}
            heading="Local Partnerships and Collaborations"
            para="ameLuxurious hotels, palaces, and resorts offering world-className hospitality and regal experiences."
          />
          <DWTExpert
            color={"blue"}
            Icon={TfiLayoutMediaCenterAlt}
            heading="Virtual Tours and Multimedia Content"
            para="Create immersive virtual tours, stunning imagery, and videos showcasing the venue's beauty, allowing couples to envision their dream wedding."
          />
          <DWTExpert
            color={"blue"}
            Icon={MdOutlineOnlinePrediction}
            heading="Online Presence Enhancement"
            para="Create immersive virtual tours, stunning imagery, and videos showcasing the venue's beauty, allowing couples to envision their dream wedding."
          />
          <DWTExpert
            color={"blue"}
            Icon={GrWorkshop}
            heading="Representing  in WorkShops"
            para="Create immersive virtual tours, stunning imagery, and videos showcasing the venue's beauty, allowing couples to envision their dream wedding."
          />
          <DWTExpert
            color={"blue"}
            Icon={BsPersonLinesFill}
            heading="Influencer Partnerships"
            para="Collaborate with influential Indian wedding bloggers, influencers, or celebrities to showcase the property and its offerings to a wider audience."
          />
          <DWTExpert
            color={"blue"}
            Icon={FaNetworkWired}
            heading="Networking Opportunities"
            para="Facilitating interactions between attendees, property representatives, and potential clients to foster relationships and address queries."
          />
          <DWTExpert
            color={"blue"}
            Icon={BiShowAlt}
            heading="Property Showcase"
            para="Engaging multimedia presentations unveiling the property's picturesque settings, exclusive amenities, and versatile spaces for various wedding ceremonies."
          />
        </Box>
      </Box>

      <Reviews />
      <Faqs />
    </>
  );
}

export default Home;
