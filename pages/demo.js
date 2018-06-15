import React from 'react';
import LineChartDemo from '../src/components/line-chart-demo';

const data = [
  {
    period: "1704",
    totalSales: 5160368
  },
  {
    period: "1801",
    totalSales: 1264209
  },
  {
    period: "1802",
    totalSales: 1302554
  },
  {
    period: "1803",
    totalSales: 1525103
  },
  {
    period: "1804",
    totalSales: 2012954
  }
];

const Demo = () => {
  return (
    <div>
      <div>
        <LineChartDemo data={data} />
      </div>
    </div>
  );
}

export default Demo;