import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";


const Projects = () => {
  return (
    <Stack
      id="Projects"
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
          text2="Before our first cooking session, I will assess your kitchen setup, available tools, and storage capacity to ensure everything runs smoothly"

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
          text2="I will provide a detailed grocery list for you to ensure all necessary ingredients are available. Since I currently don’t have a car, I may not be able to do the shopping myself"

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
          text2="Meals are portioned and stored in glass containers for optimal freshness. Clients must provide their own glass containers, having more, allows for better single-serving portions. I strongly recommend avoiding plastic storage to maintain the quality and safety of the food"

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

export default Projects;
