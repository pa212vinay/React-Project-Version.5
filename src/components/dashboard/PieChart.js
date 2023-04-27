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
        labels: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Eleven', 'Twelve', 'Thirteen'],
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
    const legendExtraSpace = {
        id: 'legendExtraSpace',
        afterInit(chart) {
            console.log(chart.legend.fit)
            const fitValue = chart.legend.fit;
            chart.legend.fit = function fit() {
                fitValue.bind(chart.legend)();
                let width = this.width += 100;
                return width;
            }
        }
    }
    var options = {
        animation: true,
        plugins: {
            legend: {
                position: 'right',
                // align: 'center',
                
                labels:{
                    // textAlign: 'right',
                    pointStyle:'circle',
                    usePointStyle: true
                }
            },
            tooltip: {
                enabled: true
            },
        },
        Plugin: [legendExtraSpace]
    }

    return (
        <div className="chart">
            <h3>PRODUCT SALESBY RANGE</h3>
            <hr className="bottomBorder" />
            <Pie
                data={data}
                options={options}
            />
             <h3 className="text-center fw-bold mt-3">Demo export prdos</h3>
        </div>
    )
}
export default PieChart;