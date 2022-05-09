import React from 'react';
import "./Graph.css";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Graph = (props) => {
    return (
        <>
            <div className='container chart-container' style={{
                display: "flex",
                justifyContent: "center",
                width: "85%",
            }}>
                <Line data={{
                    labels: props.label.map(l => l.substr(0, 10)),
                    datasets: [{
                        label: 'Covid DataSets Around the World',
                        fill: true,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 3,
                        data: props.yAxis
                    }]
                }} />
            </div>
        </>
    )
}

export default Graph;