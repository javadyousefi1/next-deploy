import Pie from "@/components/Pie";
import dynamic from "next/dynamic";

const Human = dynamic(() => import("@/components/Human"), { ssr: false });
const Test2 = dynamic(() => import("@/components/Test2"), { ssr: false });
const Drill2 = dynamic(() => import("@/components/Drill2"), { ssr: false });
const CustomSvg = dynamic(() => import("@/components/CustomSvg"), {
  ssr: false,
});

const Drill1 = dynamic(() => import("@/components/Drill1"), { ssr: false });

import { endPointTest } from "../information";
import { useEffect, useState } from "react";
import Column from "@/components/column";
import Line from "@/components/Line";
import Commen from "@/components/commen";
import axios from "axios";

export default function Home(props) {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("/api/hello").then((res) => {
      console.log(res.data.name);
      setData(res.data.name);
    });
  }, []);

  const [test, setTest] = useState("");

  console.log(props);

  const [chartData, setChartData] = useState([
    { tableYAsixTitle: "چارت کنار", chartTitle: "عنوان چارت" },
    [
      { title: "جو", value: 10 },
      { title: "گندم", value: 40 },
      { title: "آرد", value: 10 },
    ],
  ]);

  const pieChartOptions = {
    chart: {
      // set chart type
      type: "pie",
      // background color
      backgroundColor: "#fff",
      //  font
      style: {
        fontFamily: "iransansx",
      },
    },
    title: {
      text: chartData[0].chartTitle,
      // style: { color: "green", fontSize: "20px" },
    },
    plotOptions: {
      pie: {
        // dataLabels: [
        //   {
        //     enabled: true,
        //     format: "{point.name}:  %{point.percentage:.1f}",
        //   },
        //   // {
        //   //   enabled: false,
        //   //   // distance: "-40%",
        //   //   // filter: {
        //   //   //   property: "percentage",
        //   //   //   operator: ">",
        //   //   //   value: 5,
        //   //   // },
        //   //   format: "{point.y:.1f}%",
        //   //   // style: {
        //   //   //   fontSize: "0.9em",
        //   //   //   color: "black",
        //   //   //   textOutline: "none",
        //   //   // },
        //   // },
        // ],
      },
    },
    series: [
      {
        name: "مقدار هر بخش",
        data: [
          [chartData[1][0].title, chartData[1][0].value],
          [chartData[1][1].title, chartData[1][1].value],
          [chartData[1][2].title, chartData[1][2].value],
        ],
        // the all border line beetween chart
        borderColor: "white",
        // do not effect
        color: "red",
        // border radius
        borderRadius: 7,
        // the space between pie
        borderWidth: 2,
        // aspect
        center: ["50%", "50%"],
        // click event
        events: {
          click: (clickedChartData) => console.log(clickedChartData),
        },
        // extract when click on it
        allowPointSelect: true,
        dataLabels: [
          {
            enabled: true,

            distance: 15,

            format: "{point.name} ",

            style: {
              fontSize: "0.9em",

              // color: "red",

              textOutline: "none",
            },
          },

          {
            enabled: true,

            distance: "-40%",

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
      },
    ],
  };

  const columnOptions = {
    chart: {
      type: "column",
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
        data: [
          chartData[1][0].value,
          chartData[1][1].value,
          chartData[1][2].value,
        ],
      },
    ],
  };

  const lineOptions = {
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
        data: [
          chartData[1][0].value,
          chartData[1][1].value,
          chartData[1][2].value,
        ],
      },
    ],
  };

  const [isShowItem, setIsShowItem] = useState(pieChartOptions);

  return (
    <main className={`flex  flex-col items-center justify-between  mt-2 `}>
      <Commen chartData={chartData} option={isShowItem} />

      <div className="grid grid-cols-1 grid-rows-1 gap-2">
        {/* {isShowItem === "pie" && <Pie chartData={chartData} />}
        {isShowItem === "column" && <Column chartData={chartData} />}
        {isShowItem === "line" && (
          <div className="">
            <Line chartData={chartData} />
          </div>
        )} */}

        {/* <Drill1 /> */}
        {/* <Drill2 /> */}
        {/* <Test2 /> */}
        {/* <Human /> */}
        {/* <CustomSvg /> */}
      </div>

      <div className="mt-10">
        <div className="text-white">نام عنوان :{chartData[0].chartTitle}</div>
        <div>
          {chartData[1].map((item, index) => (
            <li key={index}>
              عنوان : {item.title + " "}
              مقدار : {"%" + item.value}
            </li>
          ))}
        </div>
        <div className="flex flex-col gap-y-2 mt-2">
          <button
            className="bg-white text-black px-4 py-2 rounded-lg"
            onClick={() => setIsShowItem(pieChartOptions)}
          >
            نمودار پای
          </button>
          <button
            className="bg-white text-black px-4 py-2 rounded-lg"
            onClick={() => setIsShowItem(columnOptions)}
          >
            نمودار ستونی
          </button>
          <button
            className="bg-white text-black px-4 py-2 rounded-lg"
            onClick={() => setIsShowItem(lineOptions)}
          >
            نمودار خطی
          </button>
        </div>
      </div>
    </main>
  );
}
