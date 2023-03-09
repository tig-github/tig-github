import React from "react";
import { Box, Text } from "@chakra-ui/react";
import ListField from "../components/ListField";

const Home = () => {
  const obj = { name1: "description1" };
  return (
    <Box bg="#2C1B47" w="100%" h="calc(100vh)">
      <Text color="white">lol</Text>
      <ListField items={obj} />
    </Box>
  );
};

export default Home;
