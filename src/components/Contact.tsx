import {
  Box,
  Button,
  Flex,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MdEmail, MdCopyright } from "react-icons/md";
import { Link } from "react-scroll";
import { Link as Link_chakra }  from "@chakra-ui/react";

const Contact = () => {
  return (
    <Stack
      id="Contact"
      bg="white"
      h="100%"
      align={"center"}
      direction={"column"}
    >
      <Text
        letterSpacing={-1}
        fontSize={"medium"}
        fontWeight="500"
        mt={7}
        color={"RGBA(0, 0, 0, 0.36)"}
      >
        Get in Touch
      </Text>
      <Text
        letterSpacing={1}
        mt={-2}
        fontSize={"xx-large"}
        as={"b"}
        color={"black"}
      >
        Contact Me
      </Text>
      <Flex
        direction="row"
        border="solid"
        borderColor="gray"
        borderRadius="22px"
        borderWidth="1px"
        height={16}
        align="center"
        mt={4}
        px={2}
      >
        <Button
          as = {Link_chakra}
          leftIcon={<MdEmail />}
          color="black"
          fontSize="sm"
          fontWeight={400}
          bg="white"
          _hover={{ transform: "scale(1.05)", textDecoration: "none" }}
          href="mailto:chefparri@hotmail.com"
        >
          chefparri@hotmail.com
        </Button>

      </Flex>
      <Box height={40}></Box>
      <Stack cursor={"pointer"} direction="row" spacing={8}>
        <Link
          to="Home"
          spy={true}
          smooth={true}
          offset={-160}
          duration={500}
          key={"Home"}
        >
          <Text color="black" fontWeight={500}>
            Home
          </Text>
        </Link>
        <Link
          to="About"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          key={"About"}
        >
          <Text color="black" fontWeight={500}>
            About
          </Text>
        </Link>
        <Link
          to="Why"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          key={"Why"}
        >
          <Text color="black" fontWeight={500}>
            Why
          </Text>
        </Link>
        <Link
          to="Price"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          key={"Price"}
        >
          <Text color="black" fontWeight={500}>
            Price
          </Text>
        </Link>
        <Link
          to="How"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          key={"How"}
        >
          <Text color="black" fontWeight={500}>
            How
          </Text>
        </Link>
      </Stack>
      <HStack mt={4} mb={10}>
        <Text mr={-1} color="gray" fontSize={"x-small"}>
          Copyright
        </Text>
        <MdCopyright size={10} color="gray" />
        <Text ml={-1} color="gray" fontSize={"x-small"}>
          2025 Tómas Parrinha. All Rights Reserved
        </Text>
      </HStack>
    </Stack>
  );
};

export default Contact;
