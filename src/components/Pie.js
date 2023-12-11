import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Pie = ({ chartData }) => {


  return (
    <>
      {" "}
      <div>
        <HighchartsReact highcharts={Highcharts} options={pieChartOptions} />
      </div>
    </>
  );
};

export default Pie;
