import React from "react";

import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const Test2 = () => {
  const options = {
    chart: {
      type: "column",
      height: "fit-content",
      style: {
        fontFamily: "iransansx",
      },
      backgroundColor: "#fff",
    },

    title: {
      text: "سرانه مصرف گندم و ذرت",
      align: "center",
      style: {
        fontFamily: "iransansx-ultra-light!important",
        color: "lightblue",
      },
    },

    xAxis: {
      categories: ["آمریکا", "چین", "برزیل", "اروپا", "هند", "روسیه"],
      crosshair: true,
      accessibility: {
        description: "Countries",
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "1000  تن ",
      },
    },
    tooltip: {
      valueSuffix: " (1000 MT)",
    },
    plotOptions: {
      column: {
        pointPadding: 0.1,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "ذرت",
        data: [462, 200, 70, 83, 75, 140],
      },
      {
        name: "گندم",
        data: [51, 136, 5, 141, 107, 770],
      },
    ],
  };
  return (
    <div className="w-max">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Test2;
