import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Cell } from 'recharts';

class SalesPieChart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeIndex: null, 
    }

    this.onPiaEnter = (data, index) => {
      this.setState({
        activeIndex: index,
      });
    };
    this.onPiaLeave = (data, index) => {
      console.log('this is data ...', data);
      this.setState({
        activeIndex: null,
      });
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("---componentWillReceiveProps---");
    console.log(nextProps);
    const {
      data,
      selectedCategoryIndex } = nextProps;
    console.log(data);
    this.setState({
      activeIndex: selectedCategoryIndex
    });
  }

  render() {
    const { data, selectedCategoryIndex } = this.props;
    const { activeIndex } = this.state; 
    
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
          onMouseEnter={this.onPiaEnter}
          onMouseLeave={this.onPiaLeave}
        >
          {
            data.map((entry, index) =>
              <Cell
                key={`cell-${index}`}
                fill={
                  index === activeIndex ? 
                    'red' : 'gray'
                }
              />)
          }
        </Pie>
      </PieChart>
    );
  }
}

export default SalesPieChart;
