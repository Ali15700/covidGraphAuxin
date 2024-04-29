import React from 'react'
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import covidData from "../../data/covidData.json";
import covidBarData from "../../data/covidBarData.json";
import "./Graph.css";


defaults.maintainAspectRatio = false;
 defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const Graph = () => {
  const labels = covidData.Employees.Employee.map(data => data['Country/Region']);
  const confirmed = covidData.Employees.Employee.map(data => parseInt(data.Confirmed));
  const deaths = covidData.Employees.Employee.map(data => parseInt(data.Deaths));


  return (
    <div className="graphdata">
    <div className="dataCard lineCard">
    <Line
        data={{
          labels: labels,
          datasets: [
            {
              label: "Confirmed Cases",
              data: confirmed,
              backgroundColor: "#064FF0",
              borderColor: "#064FF0",
            },
            {
              label: "Deaths",
              data: deaths,
              backgroundColor: "#FF3030",
              borderColor: "#FF3030",
            },
          ],
        }}
        options={{
          elements: {
            line: {
              tension: 0.5,
            },
          },
        }}
      />
  </div>
  <div className="dataCard barCard">
  <Bar
  data={{
    labels: covidBarData.Employees.Employee.map((employee) => employee.Country),
    datasets: [
      {
        label: "Total Deaths",
        data: covidBarData.Employees.Employee.map((employee) => employee.Deaths),
        backgroundColor: [
          "rgba(43, 63, 229, 0.8)",
          "rgba(250, 192, 19, 0.8)",
          "rgba(253, 135, 135, 0.8)",
        ],
        borderRadius: 5,
      },
    ],
  }}
  options={{
    plugins: {
      title: {
        text: "Covid data",
      },
    },
  }}
/>

</div>
 
    </div>
  )
}

export default Graph
