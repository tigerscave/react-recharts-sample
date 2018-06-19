import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend 
} from 'recharts';

export default class LineChartToggleDemo extends React.Component {
 
  render() {
    const { data, isUvChartShown } = this.props;

    console.log(data);
    return (
      <LineChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis dataKey="period"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        
        {isUvChartShown ? 
          <Line
            type="line"
            dataKey="uv"
            stroke="red"
            activeDot={{r: 8}}/> : null}
        <Line
          type="line"
          dataKey="pv"
          stroke="blue"
          activeDot={{r: 8}}/>
        <Line
          type="line"
          dataKey="amt"
          stroke="orange"
          activeDot={{r: 8}}/>
      </LineChart>
    );
  }
}




