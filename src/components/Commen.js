// Import Highcharts
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Example data

// Component rendering Highcharts chart
const Commen = ({ chartData, option }) => {
  console.log(chartData);
  const data = [
    chartData[1][0].value,
    chartData[1][1].value,
    chartData[1][2].value,
  ];

  const options = {
    chart: {
      type: "line",
      style: {
        fontFamily: "iransansx",
      },
    },
    title: {
      text: chartData[0].chartTitle,
    },
    xAxis: {
      categories: [
        chartData[1][0].title,
        chartData[1][1].title,
        chartData[1][2].title,
      ],
      labels: {
        rotation: -45, // Set the rotation angle here
      },
    },
    yAxis: {
      title: {
        text: chartData[0].tableYAsixTitle,
      },
    },
    series: [
      {
        name: chartData[0].tableYAsixTitle,
        data: data,
      },
    ],
  };
  return (
    <>
      2
      <HighchartsReact highcharts={Highcharts} options={option} />
    </>
  );
};

export default Commen;
