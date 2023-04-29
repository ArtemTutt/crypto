/* eslint-disable */
import {Link} from "react-router-dom";

const CoinComponents = ({coin}) => {
    console.log(coin)
    return (
        <Link to={`/coin/${coin.id}`}>
          <div className="mb-2 p-2 border-gray-200 border-2 rounded hover:bg-gray-300 font-semibold cursor-pointer">
              <div className="flex items-center gap-1">
                  <span>{coin.score+1}.</span>
                  <img className="w-10" src={coin.small} alt={coin.name}/>
                  <p>{coin.name}</p>
                  <small className="text-xs">({coin.symbol})</small>
              </div>
          </div>
        </Link>
    );
};

export default CoinComponents;