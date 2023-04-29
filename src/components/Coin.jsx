/* eslint-disable */

import {LogoTrendingUp, LogoTrendingDown} from "../icons/icons";
import {Link} from "react-router-dom";

const Coin = ({coin}) => {
    return (
        <Link to={`/coin/${coin.id}`}>
            <div className="grid grid-cols-3 sm:grid-cols-4 font-medium p-2 rounded birder-gray-200 border-b hover:bg-gray-300 cursor-pointer">
                <div className="flex items-center gap-3 w-full">
                    <img className="w-6" src={coin.image} alt={coin.name}/>
                    <p>{coin.name}</p>
                    <span className="text-xs">({coin.symbol})</span>
                </div>
                <span className="w-full text-center">{coin.current_price} $</span>
                <span className={`flex gap-1 ${coin.price_change_percentage_24h < 0 ? 'text-red-400' : 'text-green-400'} `}>
                    {coin.price_change_percentage_24h < 0 ? <LogoTrendingDown /> : <LogoTrendingUp />}
                    {coin.price_change_percentage_24h}
                </span>
                <div className="hidden sm:block">
                    <p className="font-semobold">Market Cap</p>
                    <span>{coin.market_cap} $</span>
                </div>
            </div>
        </Link>
    );
};

export default Coin;