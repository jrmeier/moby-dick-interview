import React from 'react';
import { Chart } from '../Chart/Chart'
import './App.css';
import { ChartControl } from '../Chart/ChartControl/ChartControl';

export class App extends React.Component {  
  constructor(props) {
    super(props)
    this.state = {
      chartRangeMax: 100,
      // chartStyle: 'Bar'
    }
  }
  handleDataRangeChange = (value) => {
    console.log("changing the max chart range: ",value)
    
    this.setState({chartRangeMax: parseInt(value)})
  }
  handleChartStyleChange = (value) => {
    console.log("loading new chart style: ",value)

    this.setState({chartStyle: value})
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          🐋 Moby Dick Interview 🐋
        </div>
        <div className='AppBody'>
          <ChartControl
            handleDataRangeChange={this.handleDataRangeChange}
            handleChartStyleChange={this.handleChartStyleChange}
            />
          <Chart 
            chartRangeMax={this.state.chartRangeMax}
            chartStyle={this.state.chartStyle}
            />
        </div>
      </div>
    );
  }
}

export default App;
