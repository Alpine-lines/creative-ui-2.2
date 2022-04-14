import React from "react";
import { 
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel, 
    SimpleGrid, 
    HStack,
    Box,
    useToken,
    useColorModeValue
} from "@chakra-ui/react";
import Discover from "../../Discover";
import FilterSort from "../FilterSort/FilterSort";

export default function FilterTab() {
    

    return (
        <Tabs 
            variant="soft-rounded" 
            colorScheme="pink"
            maxWidth='100vw'
            margin={[0, 0, 10, 10]}>
            <HStack
                display='flex'
                margin={0}
                flexDir={['column','column', 'column', 'row']}>
            <TabList
                display='flex'
                flexDir={['column','column', 'column', 'row']}
                margin={[0]}
                >
                <Tab>All</Tab>
                <Tab color={useColorModeValue("gray.900", "white")}>🖼&nbsp;Art</Tab>
                <Tab color={useColorModeValue("gray.900", "white")}>📸&nbsp;Photography</Tab>
                <Tab color={useColorModeValue("gray.900", "white")}>🎮&nbsp;Games</Tab>
                <Tab color={useColorModeValue("gray.900", "white")}>👾&nbsp;Metaverses</Tab>
                <Tab color={useColorModeValue("gray.900", "white")}>🎵&nbsp;Music</Tab>
                <Tab color={useColorModeValue("gray.900", "white")}>🎞&nbsp;Trailers</Tab>
                <Tab color={useColorModeValue("gray.900", "white")}>🎭&nbsp;Pilots</Tab>
            </TabList>
            <FilterSort />
            </HStack>
        </Tabs>
    );
}