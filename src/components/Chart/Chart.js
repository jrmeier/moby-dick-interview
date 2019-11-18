import React from 'react'
import { Bar, Doughnut, Pie } from 'react-chartjs-2';

import ReactWordcloud from 'react-wordcloud';

import { getChartJSData, getCloudData } from './chartDataHelpers'

export function Chart(props) {
        const { chartStyle, chartRangeMax, chartRangeMin} = props
        const data = getChartJSData(chartRangeMin, chartRangeMax)
        
        if(chartStyle === 'Bar'){
            return <Bar data={data} />
        }
        if(chartStyle === 'Doughnut') {
            return <Doughnut data={data} />
        }
        if(chartStyle === 'Pie') {
            return <Pie data={data} />
        }


    return <ReactWordcloud words={getCloudData(chartRangeMin, chartRangeMax)} />

    
}
