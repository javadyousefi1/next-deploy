import React from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Drilldown from "highcharts/modules/drilldown";

Drilldown(Highcharts);

const Drill2 = () => {
  const options = {
    chart: {
      type: "column",
      style: {
        fontFamily: "iransansx",
      },
      backgroundColor: "#fff",
    },
    title: {
      text: "استفاده از ",
      align: "center",
      style: {
        color: "lightblue",
      },
    },
    subtitle: {
      text: "زیر عنوان",
      align: "center",
    },

    accessibility: {
      announceNewData: {
        enabled: true,
      },
      point: {
        valueSuffix: "%",
      },
    },

    plotOptions: {
      series: {
        // borderRadius: 5,
        dataLabels: [
          {
            enabled: true,
            distance: 15,
            format: "{point.name}",
          },
          {
            enabled: true,
            distance: "-30%",
            filter: {
              property: "percentage",
              operator: ">",
              value: 5,
            },
            format: "{point.y:.1f}%",
            style: {
              fontSize: "0.9em",
              color: "black",
              textOutline: "none",
            },
          },
        ],
        borderWidth: 0,
      },
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> از کل<br/>',
    },

    series: [
      {
        name: "مرورگرها",
        colorByPoint: true,
        data: [
          {
            name: "کروم",
            y: 61.04,
            drilldown: "Chrome",
            color: "red",
          },
          {
            name: "سافاری",
            y: 9.47,
            drilldown: "Safari",
          },
          {
            name: "ایج",
            y: 9.32,
            drilldown: "Edge",
          },
          {
            name: "موزیلا",
            y: 8.15,
            drilldown: "Firefox",
          },
          {
            name: "سایر",
            y: 11.02,
            drilldown: null,
          },
        ],
      },
    ],
    drilldown: {
      series: [
        {
          name: "کروم",
          id: "Chrome",
          data: [
            ["v97.0", 36.89],
            ["v96.0", 18.16],
            ["v95.0", 0.54],
            ["v94.0", 0.7],
            ["v93.0", 0.8],
            ["v92.0", 0.41],
            ["v91.0", 0.31],
            ["v90.0", 0.13],
            ["v89.0", 0.14],
            ["v88.0", 0.1],
            ["v87.0", 0.35],
            ["v86.0", 0.17],
            ["v85.0", 0.18],
            ["v84.0", 0.17],
            ["v83.0", 0.21],
            ["v81.0", 0.1],
            ["v80.0", 0.16],
            ["v79.0", 0.43],
            ["v78.0", 0.11],
            ["v76.0", 0.16],
            ["v75.0", 0.15],
            ["v72.0", 0.14],
            ["v70.0", 0.11],
            ["v69.0", 0.13],
            ["v56.0", 0.12],
            ["v49.0", 0.17],
          ],
        },
        {
          name: "Safari",
          id: "Safari",
          data: [
            ["v15.3", 0.1],
            ["v15.2", 2.01],
            ["v15.1", 2.29],
            ["v15.0", 0.49],
            ["v14.1", 2.48],
            ["v14.0", 0.64],
            ["v13.1", 1.17],
            ["v13.0", 0.13],
            ["v12.1", 0.16],
          ],
        },
        {
          name: "Edge",
          id: "Edge",
          data: [
            ["v97", 6.62],
            ["v96", 2.55],
            ["v95", 0.15],
          ],
        },
        {
          name: "Firefox",
          id: "Firefox",
          data: [
            ["v96.0", 4.17],
            ["v95.0", 3.33],
            ["v94.0", 0.11],
            ["v91.0", 0.23],
            ["v78.0", 0.16],
            ["v52.0", 0.15],
          ],
        },
      ],
    },
  };
  return (
    <div className="w-max">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Drill2;
