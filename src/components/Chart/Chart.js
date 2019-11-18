import React, { Component } from 'react'
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import { Cloud } from './Cloud'
import { makeChartDataUtil, makeCloudDataUtil } from './makeChartDataUtil'


export class Chart extends Component {

    renderChart = () => {
        const { chartStyle,chartRangeMax } = this.props
        const data = makeChartDataUtil(chartRangeMax)
        
        if(chartStyle === 'Bar'){
            return <Bar data={data} />
        }
        if(chartStyle === 'Doughnut') {
            return <Doughnut data={data} />
        }
        if(chartStyle === 'Pie') {
            return <Pie data={data} />
        }

        const cloudData = makeCloudDataUtil(chartRangeMax)
        return <Cloud data={cloudData} />
        }
    
    render() {
        return (
            <div>
                {this.renderChart()}
            </div>
        );
        }
}
