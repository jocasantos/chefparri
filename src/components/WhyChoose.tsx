import { Box, Card, Flex, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import CardTemplate from "./CardTemplate";


const WhyChoose = () => {
  return (
    <Stack
      id="WhyChoose"
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
        Why Choose
      </Text>
      <Text
        mt={-2}
        letterSpacing={1}
        fontSize={"xx-large"}
        as={"b"}
        color={"black"}
      >
        Chef Parri
      </Text>
      <Box mt={4} />
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem >
      <Flex>
        <CardTemplate


          text="Healthier Eating"
          text2="Home-cooked meals designed to your dietary needs"

        />
      </Flex>
      <Box mt={4} />
      <Flex>
        <CardTemplate


          text="Time Saving"
          text2="No need to cook or plan meals during your busy week"

        />
      </Flex>
      </GridItem>
      <GridItem >
      <Flex>
        <CardTemplate

          text="Less Food Waste"
          text2="Efficient portioning and storage solutions"

        />
      </Flex>
      <Box mt={4} />
      <Flex>
        <CardTemplate


          text="Stress-Free Dining"
          text2="Enjoy delicious meals without the hassle of preparation"

        />
      </Flex>
      </GridItem>
        </Grid>
      
    </Stack>
  );
};

export default WhyChoose
