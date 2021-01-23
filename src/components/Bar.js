import React from 'react'
import ChartistGraph from 'react-chartist';

const Bar = () => {



    let data = {
        labels: ["w1", "w2", "w3", "w4", "w5", "w6"],
        series: [[1, 2, 4, 8, -2, -4]]
    }

    let options = {
        width: 600,
        high: 10,
        low: -10,
        axisX: {
            labelInterpolationFnc: function(value, index) {
                return index % 2 === 0 ? value : null;
            }
        }
};

let type = "Bar"

    return (
        <div>
           <ChartistGraph data={data} options={options} type={type} /> 
        </div>
    )
}

export default Bar
