import {
  Box,
  Button,
  HStack,
  Image,
  Img,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import flag from "../assets/portugal-07.svg";
import { Link as Scroll } from "react-scroll";
import chef3 from "../assets/chefparri3bg.png";
import Tomo from "../assets/Tomo.jpeg";
import { FaInstagram } from "react-icons/fa";


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
        mt={14}
        color={"RGBA(0, 0, 0, 0.36)"}
      >
        Hello, I'm
      </Text>

      <Img width={360} mt={-20} pr={10} pb={6}  src={chef3}/>



      <Text fontWeight="600" fontSize={"x-large"} color={"RGBA(0, 0, 0, 0.36)"}>
      Master of Culinary Arts
      </Text>

      <Img boxSize={14} src={flag} />

      <Box mt={4} />

      <HStack  spacing={4}>

      <Link
          _hover={{ transform: "scale(1.1)" }}
          isExternal
          href="https://www.instagram.com/chefparri/"
        >
          <FaInstagram size={56} color="black" />
        </Link>

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

      </HStack>

      <Box mt={40} />

  

      <Text
        mt={-2}
        letterSpacing={1}
        fontSize={"xx-large"}
        as={"b"}
        color={"black"}
        textAlign={"center"}
      >
        Do you need someone that prepares delicious<br></br>
        and balanced meals for your entire week?

      </Text>
      <Text fontWeight="600" fontSize={"x-large"} color={"RGBA(0, 0, 0, 0.36)"} textAlign={"center"}>
      With Chef Parri it is now possible!
      </Text>

    </Stack>
  );
};

export default Hero;
