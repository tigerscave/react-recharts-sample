import React from 'react';
import SalesPieChart from './pie-chart';

const latestLargeCategories =
  JSON.parse('[{"categoryCode":"S","collectedAmount":1433488,"salesAmount":220788,"middleCategories":[{"categoryCode":"L","collectedAmount":38617,"salesAmount":6947},{"categoryCode":"V","collectedAmount":1771,"salesAmount":321},{"categoryCode":"W","collectedAmount":1393100,"salesAmount":213520}],"ratio":"46.56"},{"categoryCode":"D","collectedAmount":1533267,"salesAmount":162303,"middleCategories":[{"categoryCode":"1","collectedAmount":126,"salesAmount":21},{"categoryCode":"3","collectedAmount":566,"salesAmount":84},{"categoryCode":"ｾ","collectedAmount":35227,"salesAmount":5970},{"categoryCode":"ｿ","collectedAmount":1497348,"salesAmount":156228}],"ratio":"34.23"},{"categoryCode":"R","collectedAmount":305588,"salesAmount":49425,"middleCategories":[{"categoryCode":"P","collectedAmount":303650,"salesAmount":49190},{"categoryCode":"ｸ","collectedAmount":1938,"salesAmount":235}],"ratio":"10.42"},{"categoryCode":"E","collectedAmount":178688,"salesAmount":28782,"middleCategories":[{"categoryCode":"4","collectedAmount":794,"salesAmount":108},{"categoryCode":"F","collectedAmount":120506,"salesAmount":21443},{"categoryCode":"X","collectedAmount":57388,"salesAmount":7231}],"ratio":"6.07"},{"categoryCode":"H","collectedAmount":71876,"salesAmount":7681,"middleCategories":[{"categoryCode":"7","collectedAmount":17494,"salesAmount":1395},{"categoryCode":"B","collectedAmount":52296,"salesAmount":5939},{"categoryCode":"I","collectedAmount":1240,"salesAmount":225},{"categoryCode":"U","collectedAmount":846,"salesAmount":122}],"ratio":"1.62"},{"categoryCode":"T","collectedAmount":12290,"salesAmount":2613,"middleCategories":[{"categoryCode":"T","collectedAmount":12290,"salesAmount":2613}],"ratio":"0.55"},{"categoryCode":"P","collectedAmount":21474,"salesAmount":1428,"middleCategories":[{"categoryCode":"J","collectedAmount":21474,"salesAmount":1428}],"ratio":"0.30"},{"categoryCode":"K","collectedAmount":7420,"salesAmount":1118,"middleCategories":[{"categoryCode":"ﾈ","collectedAmount":1222,"salesAmount":181},{"categoryCode":"ﾉ","collectedAmount":6198,"salesAmount":937}],"ratio":"0.24"},{"categoryCode":"O","collectedAmount":383,"salesAmount":80,"middleCategories":[{"categoryCode":"O","collectedAmount":383,"salesAmount":80}],"ratio":"0.02"}]');

class IntractPieChartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategoryCode: "",
    }

    this.onSelectChange = e => {
      this.setState({
        selectedCategoryCode: e.target.value
      })
    }
  }

  render() {
    const { selectedCategoryCode } = this.state;
    return (
      <div>
        <h1>Intractive Pie chart demo</h1>
        <SalesPieChart
          data={latestLargeCategories}
          selectedCategoryCode={selectedCategoryCode} />
        <select
          value={selectedCategoryCode}
          onChange={this.onSelectChange}>
          <option value="">None</option>
          {latestLargeCategories.map(largeCategory => (
            <option
              value={largeCategory.categoryCode}
              >
              {largeCategory.categoryCode}
            </option>
          ))}
        </select>
        <style jsx>{`
          h1 {
            color: red;
          }
        `}</style>
      </div>
    );
  }
}

export default IntractPieChartContainer;