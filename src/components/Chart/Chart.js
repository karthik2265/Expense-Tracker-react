import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'

const Chart = ({ datapoints }) => {
  let valuesArray = datapoints.filter((x) => x.value > 0).map((x) => x.value)
  let maxValue = Math.max(...valuesArray)
  console.log(valuesArray)
  return (
    <div className='chart'>
      {datapoints.map((datapoint) => {
        return (
          <ChartBar
            value={datapoint.value}
            label={datapoint.label}
            maxValue={maxValue}
            key={Math.random()}
          />
        )
      })}
    </div>
  )
}

export default Chart
