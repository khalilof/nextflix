import { getMovieByIdAPI } from '@/app/helper/ApiURLFactory';
import addData from '@/app/firebase/addDoc';
const watchListCollection = 'khalil-watchlist';

export async function handleAddToWatchListRequest(movieId: string) {
    const movieAPIResponse = await fetch(getMovieByIdAPI(movieId));
    const movie = await movieAPIResponse.json();

    const movieToAdd = {
        title: movie.title,
        release_date: movie.release_date,
        poster_path: movie.poster_path,
        overview: movie.overview,
        id: movie.id,
    }
    const {result, error} = await addData(watchListCollection, String(movie.id), movieToAdd);
    return {result, error};
}