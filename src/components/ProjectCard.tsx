import {

  Card,
  CardBody,

  Heading,

  Text,
  VStack,
} from "@chakra-ui/react";


interface Props {
  text: string;
  text2: string;

}

const ProjectCard = ({ text, text2 }: Props) => {
  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };
  return (
    <Card
      bg="white"
      variant="outline"
      borderColor="black"
      w={300}
      minHeight={100}
      maxHeight={420}
      borderRadius={26}
      align="center"
      _hover={{ textDecoration: "none" }}
    >
      <CardBody>
        <VStack>


          <Heading mt={3} size="md" color="black">
            {text}
          </Heading>
          <Text mb={2} color="RGBA(0, 0, 0, 0.36)" textAlign={"center"}>
            {text2}
          </Text>

        </VStack>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
