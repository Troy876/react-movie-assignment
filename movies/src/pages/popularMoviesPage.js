import React from "react";
import { getPopular } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

const PopularMoviesPage = (props) => {

    const { data, error, isLoading, isError } = useQuery('popular', getPopular)

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const movies = data.results;
};
export default PopularMoviesPage;