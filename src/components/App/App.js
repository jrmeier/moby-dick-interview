import React from 'react';
import { Chart } from '../Chart/Chart'
import './App.css';
import { ChartControl } from '../Chart/ChartControl/ChartControl';
import { checkForData } from '../Chart/chartDataHelpers'

export class App extends React.Component {  
  constructor(props) {
    super(props)
    this.state = {
      chartRangeMax: 100,
      chartRangeMin: 0,
      chartStyle: 'Cloud',
      haveData: false
    }
  }
  handleDataRangeChange = (type,value) => {
    this.setState({[type]: parseInt(value)})
  }
  handleChartStyleChange = (value) => {
    this.setState({chartStyle: value})
  }

  componentDidMount = () => {
    this.setState({ haveData: checkForData()})
  }

  renderBody = () => {
    if(this.state.haveData){
      return (
      <div className='AppBody'>
        <ChartControl
          handleDataRangeChange={this.handleDataRangeChange}
          handleChartStyleChange={this.handleChartStyleChange}
        />
        <Chart
          chartRangeMax={this.state.chartRangeMax}
          chartRangeMin={this.state.chartRangeMin}
          chartStyle={this.state.chartStyle}
        />
    </div>)
    } 
    return (
      <div>
        Hey you're missing the data file, which probably means it didn't build correctly or it was deleted. 
        Check out the <a href={'https://github.com/jrmeier/moby-dick-interview/blob/master/README.md'}>README</a>.
      </div>
    )
  }

  render() {
    
    return (
      <div className="App">
        <div className="App-header">
          <span><span role="img" aria-label='Whale'>🐋</span>Moby Dick Interview<span role="img" aria-label='Whale'>🐋</span></span>
        </div>
        {this.renderBody()}
      </div>
    );
  }
}

export default App;
