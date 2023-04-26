import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Row, Col } from "react-bootstrap";
import { Icon } from '@iconify/react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)

const BarChart = () => {
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
        animation: true,
        plugins: {
            legend: {
                display: true
            },
            tooltip: {
                enabled: true
            },
            layout: {
                padding: 30
            },
        }
    }

    return (
        <Row>
            <Col md={12}>
                <h3>REVENUE BY PRODUCT</h3>
                <p>DAILY SALES PERFORMANCE</p>
                <hr className="bottomBorder" />
            </Col>
            <Col md={8}>
                <Bar
                    data={data}
                    height={250}
                    options={options}
                />
                <div className="mt-3">
                    <span className="ps-5 fw-bold">Demo export prdos</span>
                    <span className="float-end pe-5 fw-bold">Product variation testing</span>
                </div>
            </Col>
            <Col md={4}>
                <div className="dateChange">
                    <span><Icon icon="material-symbols:play-arrow-rounded" rotate={2} width="32" className="txt_color" /></span>
                    <span className="text-gray">MAR 22, 2023</span>
                    <span><Icon icon="material-symbols:play-arrow-rounded" width="32" className="txt_color" /></span>
                </div>
                <div className="mt-4 text-center">
                    <h3>Today</h3>
                    <p>$1K</p>

                    <h3>Yesterday</h3>
                    <p>$1K</p>

                    <h3>Today</h3>
                    <p>$1K</p>
                </div>
            </Col>
        </Row>
    )
}
export default BarChart;