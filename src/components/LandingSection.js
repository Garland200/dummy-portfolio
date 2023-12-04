import React from "react";
import { Avatar, Heading, VStack, Box, StackDivider } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Leo!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack
    divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      align="center">
      <Avatar size="2xl" src="https://i.pravatar.cc/150?img=7" />
      <Heading as="h1" size="xl" color="white">
        {greeting}
      </Heading>
      <VStack spacing={2} align="center">
        <Box  p={2} borderRadius="md">
          {bio1}
        </Box>
        <Box  p={2} borderRadius="md">
          {bio2}
        </Box>
      </VStack>
      </VStack>

  </FullScreenSection>
);

export default LandingSection;
