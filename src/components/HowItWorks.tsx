import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";


const HowItWorks = () => {
  return (
    <Stack
      id="How"
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
        How it
      </Text>
      <Text
        mt={-2}
        letterSpacing={1}
        fontSize={"xx-large"}
        as={"b"}
        color={"black"}
      >
        Works
      </Text>
      <Box mt={4} />
      <Flex>
        <ProjectCard


          text="1. Kitchen Analysis"
          text2="Before our first session, I’ll review your kitchen setup, tools, and storage to ensure a smooth cooking experience"

        />
      </Flex>
      <Box mt={4} />
      <Flex>
        <ProjectCard


          text="2. Book Your Service"
          text2="Contact me to schedule a cooking session"

        />
      </Flex>
      <Box mt={4} />
      <Flex>
        <ProjectCard

          text="3. Menu Planning"
          text2="We discuss your preferences and dietary needs to create a fully customized menu"

        />
      </Flex>
      <Box mt={4} />
      <Flex>
        <ProjectCard


          text="4. Grocery Shopping "
          text2="I’ll provide a detailed grocery list, so you have everything ready for our session"

        />
      </Flex>
      <Box mt={4} />
      <Flex>
        <ProjectCard

          text="5. Cooking at Your Home"
          text2="I prepare all meals in your kitchen within 5-8 hours, depending on the family size"

        />
      </Flex>
      <Box mt={4} />
      <Flex>
        <ProjectCard

          text="6. Packaging & Storage "
          text2="Meals are portioned into glass containers for freshness. Clients must provide their own. Having extras, helps with single servings. I recommend avoiding plastic to maintain quality"

        />
      </Flex>
      <Box mt={4} />
      <Flex>
        <ProjectCard

          text="7. Enjoy Your Meals!   "
          text2="No stress, just great food, ready to be enjoyed"

        />
      </Flex>
    </Stack>
  );
};

export default HowItWorks;