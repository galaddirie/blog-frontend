import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetch(url)
                const json = await res.json()
                setData(json)
                setLoading(false)
            } catch (e) {
                console.log(e)
                setError(e)
                setLoading(false)
            }
        }
        fetchData()
        return () => {
            setData([])
            setError(null)
            setLoading(true)
        }
    }, [url]);
    return { loading, error, data }
};

export default useFetch