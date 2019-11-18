import React from 'react'
import './ChartControl.css'

export function ChartControl (props) {
        return (
            <div className='ChartControl'>
                    <h3>Options</h3>
                <div>
                Data Range:
                <div>
                    Top:<select defaultValue={0} onChange={(e) =>props.handleDataRangeChange('chartRangeMin', e.target.value)}>
                    <option value={0}>0</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                    <option value={40}>40</option>
                    <option value={50}>50</option>
                    <option value={60}>60</option>
                    <option value={70}>70</option>
                    <option value={80}>80</option>
                    <option value={90}>90</option>
                    <option value={100}>100</option>
                </select>
                </div>
                Bottom:<select defaultValue={100} onChange={(e) =>props.handleDataRangeChange('chartRangeMax', e.target.value)}> */}
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                    <option value={40}>40</option>
                    <option value={50}>50</option>
                    <option value={60}>60</option>
                    <option value={70}>70</option>
                    <option value={80}>80</option>
                    <option value={90}>90</option>
                    <option value={100}>100</option>
                </select>
                </div>

                <div>
                Chart Style: 
                    <select onChange={(e) => props.handleChartStyleChange(e.target.value)} >
                        <option value={'Cloud'}>Cloud</option>
                        <option value={'Doughnut'}>Doughnut</option>
                        <option value={'Bar'}>Bar</option>
                        <option value={'Pie'}>Pie</option>
                    </select>
                </div>
            </div>
        );
}
