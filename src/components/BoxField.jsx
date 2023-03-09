/*
Large box that has an image oriented to right
*/
import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

const BoxField = (text, image) => {
  return (
    <Box bg="#DCCAE9">
      <Text>{text}</Text>
      <Image src={image}></Image>
    </Box>
  );
};

export default BoxField;
