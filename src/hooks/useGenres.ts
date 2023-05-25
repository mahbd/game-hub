import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";

interface Genre {
    id: number;
    name: string;
}

interface FetchedGenreResponse {
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient.get<FetchedGenreResponse>('/genres', {signal: controller.signal})
            .then(response => {
                setGenres(response.data.results);
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
    return {genres, error, isLoading};
}

export default useGenres;