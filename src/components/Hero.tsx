import {
  Box,
  Button,
  Image,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";
import flag from "../assets/portugal-07.svg";
import { Link as Scroll } from "react-scroll";
import chef3 from "../assets/chefparri3bg.png";
import Tomo from "../assets/tomo.jpeg";

const Hero = () => {
  return (
    <Stack id="Home" bg="white" h="100%" align={"center"} direction={"column"}>

        <Image
          objectFit="cover"
          objectPosition="50% 20%"
          boxSize={200}
          borderRadius="full"
          src={Tomo}
          alt="Tómas Parrinha"
        />

      <Text
        fontWeight="500"
        letterSpacing={-1}
        fontSize={"medium"}
        mt={10}
        color={"RGBA(0, 0, 0, 0.36)"}
      >
        Hello, I'm
      </Text>

      <Img width={400} mt={-20} pr={10} pb={6}  src={chef3}/>



      <Text fontWeight="600" fontSize={"x-large"} color={"RGBA(0, 0, 0, 0.36)"}>
      Master of Culinary Arts
      </Text>

      <Img boxSize={14} src={flag} />

      <Box mt={7} />

        <Scroll
          to="Contact"
          spy={true}
          smooth={true}
          offset={-160}
          duration={500}
          key={"Contact2"}
        >
          <Button
            color="white"
            ml={1}
            border="1px"
            borderRadius="30px"
            fontSize="sm"
            px="24px"
            height="54px"
            bg="RGBA(0, 0, 0, 0.50)"
            _hover={{
              bg: "black",
              color: "white",
              transition: "0.2s",
              transform: "scale(0.98)",
            }}
          >
            Contact Info
          </Button>
        </Scroll>
      
    </Stack>
  );
};

export default Hero;
