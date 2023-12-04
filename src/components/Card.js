import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.


  const Card = ({ title, description, imageSrc }) => {
    return (
      <VStack
        spacing={4}
        p={4}
        bg="black"
        borderRadius="md"
        boxShadow="md"
        alignItems="start"
      >
        <Image src={imageSrc} alt={title} borderRadius="md" />
        <VStack spacing={2} alignItems="start" flex="1">
          <Heading as="h2" size="md">
            {title}
          </Heading>
          <Text>{description}</Text>
        </VStack>
        <HStack justifyContent="space-between" w="100%" mt="auto">
          <Text color="teal.500">Read More</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    );
  };
  

export default Card;
