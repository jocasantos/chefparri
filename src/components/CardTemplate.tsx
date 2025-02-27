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
    text3?: string;
  
  }
  
  const CardTemplate = ({ text, text2, text3 }: Props) => {
/*     const handleButtonClick = (e: React.MouseEvent) => {
      e.preventDefault();
    }; */
    return (
      <Card
        bg="white"
        variant="outline"
        borderColor="black"
        w={280}
        minHeight={180}
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
            <Text mb={0} color="RGBA(0, 0, 0, 0.36)" textAlign={"center"}>
              {text2}
            </Text>
            <Text mb={2} color="RGBA(0, 0, 0, 0.36)" textAlign={"center"}>
              {text3}
            </Text>
  
          </VStack>
        </CardBody>
      </Card>
    );
  };
  
  export default CardTemplate;
  