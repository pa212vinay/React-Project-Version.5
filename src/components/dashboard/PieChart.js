import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";


ChartJS.register(
    Tooltip,
    Legend,
    ArcElement
)

const PieChart = () => {

    var data = {
        labels: ['1', '2', '3', '4', '5', '6', '8', '10', '11', '12', '13'],
        datasets: [{
            label: 'Pie Chart',
            data: [12, 19, 3, 5, 2, 3, 7, 11, 4, 8, 2, 9, 3],
            maintainAspectRatio: false,
            backgroundColor: [
                'rgba(11, 118, 201, 0.6)',
                'rgba(11, 118, 201, 0.36)',
                '#0B76C9',
                'rgba(11, 118, 201, 0.6)',
                'rgba(11, 118, 201, 0.36)',
                '#0B76C9',
                'rgba(11, 118, 201, 0.6)',
                'rgba(11, 118, 201, 0.36)',
                '#0B76C9',
                'rgba(11, 118, 201, 0.6)',
                'rgba(11, 118, 201, 0.36)',
                '#0B76C9',
                'rgba(11, 118, 201, 0.6)',
            ],
        }]
    }
    var options = {
        animation: true,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            },
        }
    }

    return (
        <div>
            <Pie
                data={data}
                options={options}
            />
        </div>
    )
}
export default PieChart;