import { Stack, Card, CardBody, Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Stack id="About" bg="white" h="100%" align={"center"} direction={"column"}>
      <Text
        fontWeight="500"
        letterSpacing={-1}
        fontSize={"medium"}
        color={"RGBA(0, 0, 0, 0.36)"}
      >
        Get To Know More
      </Text>
      <Text
        mt={-2}
        pb={10}
        letterSpacing={1}
        fontSize={"xx-large"}
        as={"b"}
        color={"black"}
      >
        About Me
      </Text>

      <Card mb={1} w="360px" bg="white" color="black">
        <CardBody>

          <Flex flexDirection="column" align="center">
            <Text mb={1} as="b">
              Life and Values
            </Text>
            <Text textAlign="justify" fontSize="sm" color="RGBA(0, 0, 0, 0.50)">
              I’m Tomás Parrinha, 30 years old, living in the Netherlands. I'm a passionate private chef who brings the <b>restaurant experience</b> to your home. With years of expertise, I craft meals that suit your taste, lifestyle, and dietary needs..
            </Text>
          </Flex>
        </CardBody>
      </Card>
      <Card w="360px" bg="white" color="black">
        <CardBody>

          <Flex flexDirection="column" align="center">
            <Text mb={1} as="b">
              Cooking
            </Text>
            <Text textAlign="justify" fontSize="sm" color="RGBA(0, 0, 0, 0.50)">
            Cooking is more than just preparing meals, it's about bringing <b>people together</b>, creating memories, and making <b>life easier</b>.

            I believe food should be simple, delicious, and <b>stress-free</b>. Let me take care of the cooking so you can enjoy your meals without the stress!


            </Text>
          </Flex>
        </CardBody>
      </Card>

    </Stack>
  );
};

export default About;
