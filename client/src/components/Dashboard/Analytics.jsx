import React from 'react';
import { Box, Flex, Heading, Button, Text } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import AdminDashboard from "./Sidebar";
const Analytics = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        animation: {
            duration: 2000,
        },
    };

    return (
        <Box p={5}>
          <AdminDashboard />
            <Heading mb={5} textAlign="center" color="teal.500">
                Analytics Dashboard
            </Heading>
            <Flex justifyContent="space-around" mb={5}>
                <Box
                    w="300px"
                    p={5}
                    bg="white"
                    boxShadow="md"
                    borderRadius="md"
                    transition="all 0.3s"
                    _hover={{ transform: 'scale(1.05)', backgroundColor: 'teal.100' }}
                >
                    <Text fontSize="xl" mb={2}>Total Sales</Text>
                    <Text fontSize="2xl" fontWeight="bold">$10,000</Text>
                </Box>
                <Box
                    w="300px"
                    p={5}
                    bg="white"
                    boxShadow="md"
                    borderRadius="md"
                    transition="all 0.3s"
                    _hover={{ transform: 'scale(1.05)', backgroundColor: 'teal.100' }}
                >
                    <Text fontSize="xl" mb={2}>New Users</Text>
                    <Text fontSize="2xl" fontWeight="bold">1,500</Text>
                </Box>
                <Box
                    w="300px"
                    p={5}
                    bg="white"
                    boxShadow="md"
                    borderRadius="md"
                    transition="all 0.3s"
                    _hover={{ transform: 'scale(1.05)', backgroundColor: 'teal.100' }}
                >
                    <Text fontSize="xl" mb={2}>Active Sessions</Text>
                    <Text fontSize="2xl" fontWeight="bold">3,200</Text>
                </Box>
            </Flex>
            <Box mb={5}>
                <Line data={data} options={options} />
            </Box>
            <Flex justifyContent="space-around">
                <Button
                    colorScheme="teal"
                    size="lg"
                    _hover={{ backgroundColor: 'teal.600', color: 'white', transition: 'background-color 0.3s, color 0.3s' }}
                >
                    Refresh Data
                </Button>
                <Button
                    colorScheme="teal"
                    size="lg"
                    _hover={{ backgroundColor: 'teal.600', color: 'white', transition: 'background-color 0.3s, color 0.3s' }}
                >
                    Export Data
                </Button>
                <Button
                    colorScheme="teal"
                    size="lg"
                    _hover={{ backgroundColor: 'teal.600', color: 'white', transition: 'background-color 0.3s, color 0.3s' }}
                >
                    View Details
                </Button>
            </Flex>
        </Box>
    );
};

export default Analytics;
