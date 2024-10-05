// CO2Chart.js

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CO2Chart = ({ data }) => {
  // Step 1: Group data by year and calculate average CO2 values
  const yearlyData = Object.values(
    data.reduce((acc, item) => {
      const { Year, Value } = item;
      
      // If the year is already present in the accumulator, add the current Value to the sum and increment the count
      if (!acc[Year]) {
        acc[Year] = { year: Year, sum: 0, count: 0 };
      }
      acc[Year].sum += Value;
      acc[Year].count += 1;

      return acc;
    }, {})
  ).map(yearObj => ({
    year: yearObj.year, // Keep the year
    averageValue: (yearObj.sum / yearObj.count).toFixed(2) // Calculate the average value and round it to 2 decimal places
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        width={600}
        height={300}
        data={yearlyData}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="averageValue" stroke="#82ca9d" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CO2Chart;
