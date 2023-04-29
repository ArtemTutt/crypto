import HistoryChart from "../components/HistoryChart.jsx";
import CoinDetail from "../components/CoinDetail.jsx";

const CryptoDetail = () => {
    return (
        <div className="wrapper-container mt-10">
            <HistoryChart />
            <CoinDetail />
        </div>
    );
};

export default CryptoDetail;