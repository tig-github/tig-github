import React from "react";
import {
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import ListField from "../components/ListField";

const Courses = () => {
  const cs12x = {
    //placeholder descriptions
    "121 Information Retrieval": "This class was great",
    "122A Intro to Data Management": "This class was pretty good",
    "122D Beyond SQL Data Management": "About to take this class",
  };
  const cs14x = {
    "141 Programming Languages": "This class was not bad",
  };
  const cs16x = {
    "161 Design and Analysis of Algorithms": "This class was very important",
    "162 Formal Languages and Automata": "About to take this class",
    "164 Computational Geometry and Geometric Modeling":
      "This class is very interesting",
  };
  const cs17x = {
    "178 Machine Learning and Data Mining": "This class was super cool",
    "190 Deep Learning for Medical Imaging": "This class was very insightful",
  };
  const csPlannedCourses = {
    "CS 143A Operating Systems": "This class should be very useful",
    "CS 142A Compilers": "This class is also very important",
  };
  const infPlannedCourses = {
    "INF 102 Concepts of Programming Languages II":
      "Will take this next quarter",
    "INF 113 Requirements Analysis and Engineering":
      "Might take this course at some point",
    "INF 115 Software Testing, Analysis, and Quality Insurance": "Seems useful",
  };
  return (
    <Box bg="#2C1B47" w="100%" h="calc(100vh)">
      <Text color="white">
        Courses at UCI are generally oragnized by their assigned numbers.
      </Text>
      <Tabs>
        <TabList>
          <Tab>
            <Text color="white">12X Information</Text>
          </Tab>
          <Tab>
            <Text color="white">14X Systems and Software</Text>
          </Tab>
          <Tab>
            <Text color="white">16X Algorithms</Text>
          </Tab>
          <Tab>
            <Text color="white"> 17X Artificial Intelligence </Text>
          </Tab>
          <Tab>
            <Text color="white"> Planned Courses </Text>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ListField items={cs12x} />
          </TabPanel>
          <TabPanel>
            <ListField items={cs14x} />
          </TabPanel>
          <TabPanel>
            <ListField items={cs16x} />
          </TabPanel>
          <TabPanel>
            <ListField items={cs17x} />
          </TabPanel>
          <TabPanel>
            <ListField items={csPlannedCourses} />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Tabs>
        <TabList>
          <Tab>Planned Courses</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ListField items={infPlannedCourses} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Courses;
