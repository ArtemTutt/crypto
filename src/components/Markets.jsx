/* eslint-disable */
import useAxios from "../hooks/useAxios.jsx";
import Coin from "./Coin.jsx";

const Markets = () => {

    const { response } = useAxios('/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en');
    console.log(response)

    return (
     <section className="mt-8">
         <h1 className="text-2xl mb-2">Markets</h1>
         {response && response.map(coin => <Coin key={coin.id} coin={coin}/>)}
     </section>
    );
};

export default Markets;


