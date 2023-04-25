import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)

const BarChartY = () => {
    var data = {
        labels: ['1', '2', '3', '4', '5', '6', '8', '10', '11', '12', '13'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3, 7, 11, 4, 8, 2, 9, 3],
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
        // animation: true,
        indexAxis: 'y',
        plugins: {
            // legend: {
            //     display: true
            // },
            // tooltip: {
            //     enabled: true
            // },
            // layout: {
            //     padding: 30
            // },
            // title: {
            //     display: true,
            //     text: 'Custom Chart Title',
            //     padding: {
            //         top: 10,
            //         bottom: 30
            //     }
            // },
        }
    }

    return (
        <div>
            <Bar
                data={data}
                height={250}
                options={options}
            />
        </div>
    )
}
export default BarChartY;