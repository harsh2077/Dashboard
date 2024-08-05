import React from 'react';
import { Select } from "@chakra-ui/react";

const SWOTFilter = ({ onSWOTSelect }) => {
  const swots = ["Strengths", "Weaknesses", "Opportunities", "Threats"];

  return (
    <Select placeholder="Select SWOT" onChange={(e) => onSWOTSelect(e.target.value)} mb={4}>
      <option value="">All</option>
      {swots.map((swot) => (
        <option key={swot} value={swot}>{swot}</option>
      ))}
    </Select>
  );
};

export default SWOTFilter;
// filter not used in project 