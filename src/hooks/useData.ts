import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";

interface FetchResponse<T> {
    results: T[];
}

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal})
            .then(response => {
                setData(response.data.results);
                setLoading(false);
            })
            .catch(error => {
                if (!(error instanceof CanceledError)) {
                    setError(error.message);
                }
                setLoading(false);
            });
        return () => controller.abort();
    }, []);
    return {data, error, isLoading};
}

export default useData;