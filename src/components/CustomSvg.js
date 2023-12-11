import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsPictorial from "highcharts/modules/pictorial";
import { useEffect } from "react";

// Initialize the pictorial module
HighchartsPictorial(Highcharts);
// HighchartsPictorial(Highcharts);

const CustomSvg = () => {
  useEffect(() => {}, []);
  const pieChartOptions = {
    chart: {
      type: "pictorial",
      style: {
        fontFamily: "iransansx",
      },
      // width: 1000, // Set the desired width
      // height: 500,
    },

    title: {
      text: "نمودار انسانی",
      style: {
        fontWeight: 900,
      },
    },

    accessibility: {
      screenReaderSection: {
        beforeChartFormat:
          "<{headingTagName}>{chartTitle}</{headingTagName}><p>{typeDescription}</p><p>{chartLongdesc}</p>",
      },
      point: {
        valueDescriptionFormat: "{value}.",
      },
      series: {
        descriptionFormat: "",
      },
      landmarkVerbosity: "one",
    },

    xAxis: {
      categories: ["زن", "مرد"],
      lineWidth: 0,
      opposite: true,
    },

    yAxis: {
      visible: false,
      stackShadow: {
        enabled: true,
      },
      max: 100,
    },

    legend: {
      itemMarginTop: 35,
      itemMarginBottom: 15,
      layout: "vertical",
      padding: 0,
      verticalAlign: "middle",
      align: "center",
      margin: 0,
    },

    tooltip: {
      headerFormat: "",
    },

    plotOptions: {
      series: {
        pointPadding: 0,
        groupPadding: 0,
        dataLabels: {
          enabled: true,
          align: "center",
          format: "{y} %",
        },
        stacking: "normal",
        paths: [
          {
          
            definition:
              "M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.5 12.25V12h1v3.25a.75.75 0 0 0 1.5 0V12h1l-1-5v-.215a.285.285 0 0 1 .56-.078l.793 2.777a.711.711 0 1 0 1.364-.405l-1.065-3.461A3 3 0 0 0 8.784 3.5H7.216a3 3 0 0 0-2.868 2.118L3.283 9.079a.711.711 0 1 0 1.365.405l.793-2.777a.285.285 0 0 1 .56.078V7l-1 5h1v3.25a.75.75 0 0 0 1.5 0Z",
          },
          {
            definition:
              "M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M6 6.75v8.5a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2.75a.75.75 0 0 0 1.5 0v-2.5a.25.25 0 0 1 .5 0",
          },
        ],
        // center: ["0%", "50%"], // Center the pictorial chart within the plot area
      },
    },

    series: [
      {
        name: "آب",
        data: [90, 45],
        style: {
          fontSize: "10px",
        },
        color: "lightBlue",
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 800,
          },
          chartOptions: {
            legend: {
              padding: 2,
              margin: 12,
              itemMarginTop: 2,
              itemMarginBottom: 0,
              verticalAlign: "bottom",
              layout: "horizontal",
            },
          },
        },
        {
          condition: {
            maxWidth: 800,
          },
          chartOptions: {
            legend: {
              layout: "vertical",
            },
          },
        },
      ],
    },
  };

  return (
    <>
      <div>
        <HighchartsReact highcharts={Highcharts} options={pieChartOptions} />
      </div>
    </>
  );
};

export default CustomSvg;
