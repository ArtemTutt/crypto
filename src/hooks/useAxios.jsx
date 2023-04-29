/* eslint-disable */
import {useEffect, useState} from "react";
import axios from "axios";

const UseAxios = (param) => {

    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    axios.defaults.baseURL = 'https://api.coingecko.com/api/v3';

    const fetchData = async (param) => {
        try {
            setLoading(true);
            const res = await axios(param);
            setResponse(res.data)
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(param);
    }, [])

    return {
        response, loading, error
    }
};

export default UseAxios;