import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import CardTemplate from "./CardTemplate";


const Price = () => {
  return (
    <Stack
      id="Price"
      bg="white"
      h="100%"
      align={"center"}
      direction={"column"}
    >
      <Text
        fontWeight="500"
        letterSpacing={-1}
        fontSize={"medium"}
        color={"RGBA(0, 0, 0, 0.36)"}
      >
        Price and
      </Text>
      <Text
        mt={-2}
        letterSpacing={1}
        fontSize={"xx-large"}
        as={"b"}
        color={"black"}
      >
        Packages
      </Text>
      <Box mt={4} />
         <Stack direction={"column"} >

      <Flex>
        <CardTemplate


          text="1-2 People"
          text2="120€ per session"
          text3="Excluding VAT"

        />
      </Flex>
      <Box mt={4} />
      <Flex>
        <CardTemplate


          text="3-4 People"
          text2="150€ per session"
          text3="Excluding VAT"

        />
      </Flex>

      </Stack>
      
    </Stack>
  );
};

export default Price