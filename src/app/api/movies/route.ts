import { NextResponse } from 'next/server';
import { handleAddToWatchListRequest } from '@/app/api/movies/addToWatchListFunction';
import { getWatchList } from '@/app/api/movies/getWatchListFunction';

// ACCEPT HTTP CALLS for POST: api/movies
export async function POST(request: Request) {
    const body = await request.json();
    // call Firebase to add new movie to my watchlist
    const {result, error} = await handleAddToWatchListRequest(body.new_movie);

    if (error) {
        return console.log(error);
    }
    return NextResponse.json({result});
}

// ACCEPT HTTP CALLS for GET: api/movies
export async function GET(request: Request) {
    // call Firebase to fetch my watchList
    const { result, error } = await getWatchList();

    if (error) {
        return console.log(error);
    }
    return NextResponse.json({my_movies: result});
}

