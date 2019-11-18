import React, { Component } from 'react'
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import { Cloud } from './Cloud'
import { makeChartDataUtil, makeCloudDataUtil } from './makeChartDataUtil'
import './Chart.css'


export class Chart extends Component {
    constructor(props){
        super(props)

        // this.state = {
        //     data: makeChartDataUtil(this.props.chartRangeMax)
        // }
    }

    renderChart = () => {
        const { chartStyle,chartRangeMax } = this.props
        const data= makeChartDataUtil(chartRangeMax)
        const cloudData = makeCloudDataUtil(chartRangeMax)


        if(chartStyle === 'Bar'){
            return <Bar data={data} />
        }
        if(chartStyle === 'Doughnut') {
            return <Doughnut data={data} />
        }
        if(chartStyle === 'Pie') {
            return <Pie data={data} />
        }


        return <Cloud data={cloudData} />
        }
    
    render() {        
        return (
            <div>
                <div className='ChartBody' >
                {this.renderChart()}
                </div>
            </div>
        );
        }
}
