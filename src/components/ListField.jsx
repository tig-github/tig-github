/*
Large list of items
*/

import React from "react";
import {
  Box,
  Container,
  List,
  ListItem,
  Text,
  Stack,
  Heading,
} from "@chakra-ui/react";

// items is an object {name1: description1 ... namen: descriptionn}
// optionally includes tablist
const ListField = (items) => {
  return (
    <Box bg="#DCCAE9">
      <List spacing={4}>
        {Object.keys(items["items"]).map((k) => {
          return (
            <ListItem>
              <Stack direction="column">
                <Container ml=".5rem" mb="1rem" mt="1rem">
                  <Heading size="sm">{k}</Heading>
                  <Text> {items["items"][k]} </Text>
                </Container>
              </Stack>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default ListField;
