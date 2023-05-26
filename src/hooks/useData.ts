import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {AxiosRequestConfig, CanceledError} from "axios";

interface FetchResponse<T> {
    results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: unknown[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps ? [endpoint, ...deps] : [endpoint]);
    return {data, error, isLoading};
}

export default useData;