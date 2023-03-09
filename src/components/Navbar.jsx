import React from "react";
import { Box, Flex, Button, ButtonGroup, Spacer } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <Box bg="#724C9D" w="100%" p={4}>
        <Flex align="left">
          <ButtonGroup gap="3">
            <Button colorScheme="purple" size="lg">
              Home
            </Button>
            <Button colorScheme="purple" size="lg">
              Projects
            </Button>
            <Button colorScheme="purple" size="lg">
              Courses
            </Button>
          </ButtonGroup>
          <Spacer />
          <Button colorScheme="purple" size="lg">
            ♫
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
