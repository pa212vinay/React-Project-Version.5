import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement
)

const LineChart_color = () => {

    var data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{
            label: 'Line Chart',
            data: [66, 12, 56, 20, 32, 17, 70, 26],
            fill: true,
            tension: 0.4,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)'               
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)'                
              ],
              borderWidth: 3
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
        </div>
    )
}
export default LineChart_color;