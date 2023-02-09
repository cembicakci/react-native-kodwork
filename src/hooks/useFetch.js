import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setData(response.data.results)
            setLoading(false);
        } catch (error) {
            setError(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return { data, loading, error }
}

export default useFetch