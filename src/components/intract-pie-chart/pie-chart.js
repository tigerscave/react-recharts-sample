import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Cell } from 'recharts';


class SalesPieChart extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { data } = this.props;

    return (
      <PieChart height={300} width={300}>
        <Pie
          data={data}
          dataKey="salesAmount"
          nameKey="categoryCode"
          startAngle={450}
          endAngle={90}
          innerRadius={80}
          outerRadius={130}
          fill="gray"
        >
          {
            data.map((entry, index) =>
              <Cell
                key={`cell-${index}`}
              />)
          }
        </Pie>
      </PieChart>
    );
  }
}

export default SalesPieChart;
