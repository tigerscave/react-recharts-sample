import React from 'react';

export default class LineChartDemo extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <p>{typeof data}</p>
    );
  }
}
