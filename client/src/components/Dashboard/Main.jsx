import React, { useState, useEffect } from "react";
import axios from "axios";
import IntensityChart from "./IntensityChart";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import Navbar from "./Navbar";
import RegionChart from "./RegionChart";
import AdminDashboard from "./Sidebar";
import { ChakraProvider, Flex, Box, Grid, Button } from "@chakra-ui/react";
import RelevanceBubbleChart from "./Relevance";
import TopicsRadarChart from "./TopicChart";
import PieChart from "./SectorChart";
import CountryChart from "./Country";
import LikelihoodRadarChart from "./LikelihoodChart";
import Footer from "./Footer";
import YearFilter from "./YearFilter";
import ChartSelector from "./ChartSelector";
import CountryFilter from "./CountryFilter";
import PestFilter from "./PestFilter";
import SourceFilter from "./SourceFilter";

Chart.register(CategoryScale);

const Main = () => {
  const [data, setData] = useState([]);
  const [endYear, setEndYear] = useState(2024);
  const [selectedChart, setSelectedChart] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedPest, setSelectedPest] = useState('');
  const [selectedSource, setSelectedSource] = useState('');

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const API_URL = "http://localhost:5000";
      try {
        const response = await axios.get(`${API_URL}/api/data`, {
          params: { endYear, country: selectedCountry, pestle: selectedPest, source: selectedSource }
        });
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromApi();
  }, [endYear, selectedCountry, selectedPest, selectedSource]);

  const handleExport = () => {
    alert('Export data functionality here!');
  };

  const handleReset = () => {
    setSelectedCountry('');
    setSelectedPest('');
    setSelectedSource('');
  };

  const renderChart = () => {
    switch (selectedChart) {
      case 'intensity':
        return <IntensityChart data={data} />;
      case 'region':
        return <RegionChart data={data} />;
      case 'topics':
        return <TopicsRadarChart data={data} />;
      case 'relevance':
        return <RelevanceBubbleChart data={data} />;
      case 'pie':
        return <PieChart data={data} />;
      case 'likelihood':
        return <LikelihoodRadarChart data={data} />;
      case 'country':
        return <CountryChart data={data} />;
      default:
        return (
          <ChakraProvider>
            <IntensityChart data={data} />
            <Flex direction={{ base: "column", md: "row" }} m={50}>
              <Box
                flex={{ base: "1", md: "0.5" }}
                maxW="50%"
                p={5}
                m={2}
                boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
                borderRadius={20}
              >
                <RegionChart data={data} />
              </Box>
              <Box
                flex={{ base: "1", md: "0.5" }}
                maxW="50%"
                p={5}
                m={2}
                boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
                borderRadius={20}
              >
                <TopicsRadarChart data={data} />
              </Box>
            </Flex>
            <RelevanceBubbleChart data={data} />
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
              <Box>
                <PieChart data={data} />
              </Box>
              <Box>
                <LikelihoodRadarChart data={data} />
              </Box>
            </Grid>
            <CountryChart data={data} />
          </ChakraProvider>
        );
    }
  };

  return (
    <ChakraProvider>
      <Navbar />
      <AdminDashboard />
      <Box p={4}>
        <YearFilter endYear={endYear} setEndYear={setEndYear} />
        <Flex mb={4} align="center">
          <Box
            p={2}
            borderWidth="1px"
            borderRadius="lg"
            m={2}
            textAlign="center"
          >
            <CountryFilter onCountrySelect={setSelectedCountry} />
          </Box>
          <Box
            p={2}
            borderWidth="1px"
            borderRadius="lg"
            m={2}
            textAlign="center"
          >
            <PestFilter onPestSelect={setSelectedPest} />
          </Box>
          <Box
            p={2}
            borderWidth="1px"
            borderRadius="lg"
            m={2}
            textAlign="center"
          >
            <SourceFilter onSourceSelect={setSelectedSource} />
          </Box>
          <Button
            ml="auto"
            colorScheme="blue"
            onClick={handleReset}
            _hover={{ bg: "blue.600", transform: "scale(1.05)" }}
            transition="all 0.3s"
          >
            Reset Filter
          </Button>
        </Flex>
        <Flex mb={4} align="center">
          <ChartSelector onSelectChart={setSelectedChart} />
          <Button
            ml={4}
            colorScheme="teal"
            onClick={handleExport}
            _hover={{ bg: "teal.600", transform: "scale(1.05)" }}
            transition="all 0.3s"
          >
            Export Data
          </Button>
        </Flex>
      </Box>
      {renderChart()}
      <Footer />
    </ChakraProvider>
  );
};

export default Main;
