'use server'

import { handleAddToWatchListRequest } from '@/app/api/movies/addToWatchListFunction';

export async function addToWatchlistAction(formData: FormData) {
    await new Promise(resolve => setTimeout(resolve, 3000));
    const newMovieId = formData.get('movieId')?.toString();
    if (newMovieId && newMovieId.length > 0) {
        await  handleAddToWatchListRequest(newMovieId)
    }
}