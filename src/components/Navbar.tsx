import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import HambButton from "./HambButton";
import { Link } from "react-scroll";

const menu = ["Home", "About", "Why", "Price", "How", "Contact"];

const Navbar = () => {
  const [isMdScreen] = useMediaQuery("(min-width: 48em)");
  return (
    <Flex
      w="100%"
      zIndex="sticky"
      position="fixed"
      bg="black"
      justifyContent="space-around"
      height={20}
      align={"center"}
    >
      <Link
        to={"Home"}
        spy={true}
        smooth={true}
        offset={-160}
        duration={500}
        key={"Home"}
        >
        <Text cursor="pointer" letterSpacing={1} color={"white"} fontSize="xl">
          Chef Parri
        </Text>
      </Link>
      <Flex>
        {isMdScreen ? (
          menu.map((i) => (
            <Link
              to={i}
              spy={true}
              smooth={true}
              offset={-160}
              duration={500}
              key={i}
            >
              <Text
                color={"white"}
                cursor="pointer"
                _hover={{ transform: "scale(1.1)" }}
                px={4}
              >
                {i}
              </Text>
            </Link>
          ))
        ) : (
          <HambButton />
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
