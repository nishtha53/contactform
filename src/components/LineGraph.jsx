import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const LineGraph = () => {
  const [graphData, setGraphData] = useState({});

  useEffect(() => {
    axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
      .then(response => {
        // Process the response and extract data for the line graph
        const casesData = response.data.cases;
        const dates = Object.keys(casesData);
        const caseCounts = Object.values(casesData);
        
        const graphData = {
          labels: dates,
          datasets: [
            {
              label: 'Cases',
              data: caseCounts,
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
            },
          ],
        };

        setGraphData(graphData);
      })
      .catch(error => {
        console.error('Error fetching graph data', error);
      });
  }, []);

  return (
    <div>
      <h2>Line Graph: Cases Fluctuations</h2>
      <Line data={graphData} />
    </div>
  );
};

export default LineGraph;

