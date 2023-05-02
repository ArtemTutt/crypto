import Tranding from "../components/Tranding.jsx";
import Markets from "../components/Markets.jsx";

const CryptoHome = () => {
    return (
        <div className="wrapper-container">
            <coingecko-coin-price-marquee-widget  coin-ids="bitcoin,ethereum,eos,ripple,litecoin" currency="usd" background-color="#ffffff" locale="ru"></coingecko-coin-price-marquee-widget>
            <Tranding />
            <coingecko-coin-compare-chart-widget  coin-ids="bitcoin,ethereum,eos,ripple,litecoin" currency="usd" locale="ru"></coingecko-coin-compare-chart-widget>
            <Markets />
        </div>
    );
};

export default CryptoHome;