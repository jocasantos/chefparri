import { Stack, Card, CardBody, Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { FaCode } from "react-icons/fa";

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
          <Flex justifyContent="center" mb={1}>
            <FaCode />
          </Flex>
          <Flex flexDirection="column" align="center">
            <Text mb={1} as="b">
              Life and Values
            </Text>
            <Text textAlign="justify" fontSize="sm" color="RGBA(0, 0, 0, 0.50)">
              I’m 30 years old and cooking has always been more than just a skill for me,
              it’s a <b>passion</b>. I love creating new dishes that bring happiness to people, making them smile
              with every bite. With <b>17 years of experience</b> in the hospitality industry, more on
              management and operations departments, I have four professional courses, and I have
              honed my craft to provide not just food, but a <b>memorable experience</b>.
            </Text>
          </Flex>
        </CardBody>
      </Card>
      <Card w="360px" bg="white" color="black">
        <CardBody>
          <Flex justifyContent="center" mb={1}>
            <FaCode />
          </Flex>
          <Flex flexDirection="column" align="center">
            <Text mb={1} as="b">
              Cooking
            </Text>
            <Text textAlign="justify" fontSize="sm" color="RGBA(0, 0, 0, 0.50)">
            Although I never wanted to work in restaurant kitchens, where pressure, shouting, and
rushed service take me away from the joy of cooking. <b>I believe that good food requires
time, passion, and care</b>. That’s why I created Chef Parri. I noticed that many families
struggle to find the <b>time to cook</b> or eat healthy meals due to their busy lives. With my
service, that completely changes! I take the stress out of meal preparation, ensuring <b>you enjoy</b> fresh, home-cooked meals without the struggle.

            </Text>
          </Flex>
        </CardBody>
      </Card>

    </Stack>
  );
};

export default About;
