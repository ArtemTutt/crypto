/* eslint-disable */

import useAxios from "../hooks/useAxios.jsx";
import {useParams} from "react-router-dom";
import {Line} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import moment from "moment";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

const HistoryChart = () => {
    const {id} = useParams()
    const {response} = useAxios(`/coins/${id}/market_chart?vs_currency=usd&days=30`);

    if (!response) {
        return <div>Loading...</div>
    }

    const coinChartData = response.prices.map(value => ({x:value[0], y:value[1].toFixed(2)}));

    const options = {
        responsive: true
    }

    const data = {
        labels: coinChartData.map(value => moment(value.x).format('MMM DD') ),
        datasets: [
            {
                fill: true,
                label: `${id}`,
                data: coinChartData.map(value => value.y),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ]
    }

    return (
        <div>
            <Line options={options} data={data} />
        </div>
    );
};

export default HistoryChart;