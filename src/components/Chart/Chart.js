import React from 'react'
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import { Cloud } from './Cloud'
import { getChartJSData, getCloudData } from './chartDataHelpers'

export function Chart(props) {
        const { chartStyle,chartRangeMax } = props
        const data = getChartJSData(chartRangeMax)
        
        if(chartStyle === 'Bar'){
            return <Bar data={data} />
        }
        if(chartStyle === 'Doughnut') {
            return <Doughnut data={data} />
        }
        if(chartStyle === 'Pie') {
            return <Pie data={data} />
        }

    return <Cloud data={getCloudData(chartRangeMax)} /> 
    
}
