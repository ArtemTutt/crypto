/* eslint-disable */

import useAxios from "../hooks/useAxios.jsx";
import {useParams} from "react-router-dom";

const CoinDetail = () => {
    const {id} = useParams()
    const {response} = useAxios(`/coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`);

    if (!response) {
        return <div>Loading...</div>
    }

    return (
        <div className="my-6">
            <div className='flex gap-2 items-center'>
                <img src={response.image.small} alt={response.name}/>
                <h1 className="text-2xl mb-2 capitalize font-bold">{response.name}</h1>
            </div>
            <p className="mt-6 text-gray-500" dangerouslySetInnerHTML={{__html:response.description.en }}></p>
        </div>
    );
};

export default CoinDetail;