import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Cell } from 'recharts';


class SalesPieChart extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { 
      data,
      onPiaEnter,
      onPiaLeave, 
      activeIndex,
     } = this.props;
    console.log(activeIndex);
    
    return (
      <PieChart height={300} width={300}>
        <Pie
          activeIndex={activeIndex}
          data={data}
          dataKey="salesAmount"
          nameKey="categoryCode"
          startAngle={450}
          endAngle={90}
          innerRadius={80}
          outerRadius={130}
          fill="gray"
          onMouseEnter={(data) => onPiaEnter(data)}
          onMouseLeave={(data) => onPiaLeave(data)}
        >
          {
            data.map((entry, index) =>
              <Cell
                key={`cell-${index}`}
                fill={
                  entry.name === activeIndex ? 
                    'gray' : 'red'
                }
              />)
          }
        </Pie>
      </PieChart>
    );
  }
}

export default SalesPieChart;
