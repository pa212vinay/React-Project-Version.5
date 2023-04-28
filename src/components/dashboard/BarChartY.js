import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";
// import { Row, Col } from "react-bootstrap";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)

const BarChartY = () => {
    var data = {
        labels: ['1', '2', '3', '4', '5', '6', '8', '10', '11', '12', '13'],
        datasets: [{
            label: '# of Votes new',
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
        indexAxis: 'y',
        // plugins:[ChartDataLables],
        plugins: {
            legend: {
                position: 'right',
                
                labels:{
                    // textAlign: 'right',
                    pointStyle:'circle',
                    usePointStyle: true
                }
            },
        }
    }

    return (
        
            <div className='chart'>
            <h3>2023</h3>
                <p>PRODUCT SALES BY RANGE</p>
                <hr className="bottomBorder" />
            <Bar
                data={data}
                height={250}
                options={options}
            />
           </div>
      
    )
}
export default BarChartY;