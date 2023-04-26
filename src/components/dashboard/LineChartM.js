import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement
)

const LineChartM = () => {

    var data = {
        labels: ['10', '20', '30', '40', '50', '60', '80', '70'],
        datasets: [{
            label: 'Multiline Chart',    
            data: [36, 56, 5, 20, 32, 17, 70, 26],
            borderColor: 'rgba(11, 118, 201, 0.36)',
            backgroundColor:'#0B76C9',
            pointBorderColor:'rgba(11, 118, 201, 0.36)',
            fill: true,
            tension: 0.4,
        },
        {
            label: 'Multiline Chart',    
            data: [33, 51, 5, 22, 30, 11, 73, 24],
            borderColor: 'rgba(11, 118, 201, 0.36)',
            backgroundColor:'red',
            pointBorderColor:'rgba(11, 118, 201, 0.36)',
            fill: true,
            tension: 0.4,
            
        }
    ],
        
    }
   
    var options = {
        plugins: {
            legend:  true
        },
           scales: {
            y:{
                min: 3,
            }
        }
    }

    return (
        <div>
            <Line
                data={data}
                options={options}
            />
        </div>
    )
}
export default LineChartM;