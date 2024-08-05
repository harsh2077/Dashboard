import React, { useState } from "react";
import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  useDisclosure,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  Flex,
  Heading,
  Avatar,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon, SettingsIcon } from "@chakra-ui/icons";
import {
  MdDashboard,
  MdAssignment,
  MdSettings,
  MdExitToApp,
  MdPeople,
  MdCalendarToday,
  MdInsertDriveFile,
  MdAnalytics,
} from "react-icons/md";
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Container>
      <IconButton
        icon={<ChevronRightIcon />}
        onClick={onOpen}
        position="fixed"
        top="50%"
        left={0}
        transform="translateY(-50%)"
        zIndex={1}
        colorScheme="teal"
        variant="outline"
      />

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent
          bg={useColorModeValue("gray.100", "gray.800")}
          color={useColorModeValue("gray.800", "white")}
        >
          <DrawerHeader
            borderBottomWidth="1px"
            fontSize="xl"
            fontWeight="bold"
            color="teal.500"
            display="flex"
            alignItems="center"
          >
            <SettingsIcon mr={2} /> Admin Dashboard
          </DrawerHeader>
          <DrawerBody>
            <Text fontSize="lg" mb={2} fontWeight="bold">
              Menu
            </Text>
            <List spacing={3}>
              <ListItem cursor="pointer">
                <ListIcon as={MdDashboard} fontSize="xl" />
                <Link to="/dashboard">Dashboard</Link>
              </ListItem>
              <ListItem cursor="pointer">
                <ListIcon as={MdAssignment} fontSize="xl" />
                <Link to="/tasks">Tasks</Link>
              </ListItem>
              <ListItem cursor="pointer">
                <ListIcon as={MdPeople} fontSize="xl" />
                <Link to="/users">Users</Link>
              </ListItem>
              <ListItem cursor="pointer">
                <ListIcon as={MdCalendarToday} fontSize="xl" />
                <Link to="/calendar">Calendar</Link>
              </ListItem>
              <ListItem cursor="pointer">
                <ListIcon as={MdInsertDriveFile} fontSize="xl" />
                <Link to="/files">Files</Link>
              </ListItem>
              <ListItem cursor="pointer">
                <ListIcon as={MdAnalytics} fontSize="xl" />
                <Link to="/analytics">Analytics</Link>
              </ListItem>
              <ListItem cursor="pointer">
                <ListIcon as={MdSettings} fontSize="xl" />
                <Link to="/settings">Settings</Link>
              </ListItem>
              <ListItem cursor="pointer" onClick={onClose}>
                <ListIcon as={MdExitToApp} fontSize="xl" />
                <Link to="/">Log Out</Link>
              </ListItem>
            </List>

            <Flex alignItems="center" mt="140%">
              <Avatar
                size="lg"
                src="https://www.flaticon.com/free-icon/setting_7542245?term=profile&page=1&position=25&origin=search&related_id=7542245"
                mr={4}
              />
              <Box>
                <Heading size="md">Harsh Gupta</Heading>
                <Text
                  fontSize="sm"
                  color={useColorModeValue("gray.500", "gray.400")}
                >
                  Web Developer
                </Text>
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Container>
  );
};

export default AdminDashboard;
