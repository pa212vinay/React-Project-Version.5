import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from "chart.js";
import { Icon } from '@iconify/react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement
)

const LineChart = () => {

    var data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{
            label: 'Line Chart',
            data: [36, 56, 5, 20, 32, 17, 70, 26],
            borderColor: 'rgba(11, 118, 201, 0.36)',
            backgroundColor: '#0B76C9',
            pointBorderColor: 'rgba(11, 118, 201, 0.36)',
            fill: true,
            tension: 0.4,
            // anchor :'end',
            // align :'top',
        }]
    }

    var options = {
        plugins: {
            legend: true
        },
        scales: {
            y: {
                min: 3,
            },
            x: {
                // type: 'time',
                time: {
                    unit: 'quarter'
                }
            }
        }
    }

    return (
        <div>
            <Line
                data={data}
                options={options}
                className="mb-3"
            />

            <Icon icon="material-symbols:arrow-circle-left-outline-rounded" width="42" className="txt_color"/>
            <Icon icon="material-symbols:arrow-circle-right-outline-rounded" width="42" className="txt_color"/>


        </div>
    )
}
export default LineChart;