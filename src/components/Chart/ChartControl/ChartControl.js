import React, { Component } from 'react'
import './ChartControl.css'

export class ChartControl extends Component {

    render() {
        return (
            <div className='ChartControl'>
                Data Range: <select onChange={(e) =>this.props.handleDataRangeChange(e.target.value)}>
                    <option value={10}>0-10</option>
                    <option value={20}>0-20</option>
                    <option value={30}>0-30</option>
                    <option value={40}>0-40</option>
                    <option value={50}>0-50</option>
                    <option value={60}>0-60</option>
                    <option value={70}>0-70</option>
                    <option value={80}>0-80</option>
                    <option value={90}>0-90</option>
                    <option value={100}>0-100</option>
                </select>

                Chart Style: 
                    <select onChange={(e) => this.props.handleChartStyleChange(e.target.value)} >
                        <option value={'Cloud'}>Cloud</option>
                        <option value={'Doughnut'}>Doughnut</option>
                        <option value={'Bar'}>Bar</option>
                        <option value={'Pie'}>Pie</option>
                    </select>
            </div>
        );
        }
}
