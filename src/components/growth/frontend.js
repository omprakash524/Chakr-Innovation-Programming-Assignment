import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const data = {
  x_axis: [
    "2016-10-13 03:45:00",
    "2017-01-25 07:45:00",
    "2017-05-09 11:45:00",
    "2017-08-21 15:45:00",
    "2017-12-03 19:45:00",
    "2018-03-17 23:45:00",
    "2018-06-26 19:45:00",
  ],
  y_axis: [
    27.7751, 10.8933, 10.7583, 18.2885, 9.9446, 3.3781, 8.639669421487604,
  ],
};

const years = data.x_axis.map((el) => new Date(el));

export default function StackedAreas() {
  return (
    <LineChart
      xAxis={[
        {
          id: "Years",
          data: years,
          scaleType: "time",
          valueFormatter: (date) => date.getFullYear().toString(),
        },
      ]}
      series={[
        {
          id: "percentage",
          label: "time vs profit",
          data: data.y_axis,
          stack: "total",
          area: true,
          showMark: false,
        },
      ]}
      width={600}
      height={300}
      margin={{ left: 70 }}
    />
  );
}
