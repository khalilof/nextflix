import { NextResponse } from 'next/server';
import getCollection from '@/app/firebase/getCollection';
import { handleAddToWatchListRequest } from '@/app/api/movies/addToWatchListService';

const watchListCollection = 'khalil-watchlist';



export async function POST(request: Request) {
    const body = await request.json();
    const {result, error} = await handleAddToWatchListRequest(body.new_movie);

    if (error) {
        return console.log(error);
    }
    return NextResponse.json({result});
}


export async function GET(request: Request) {
    console.log('getting the watch list collection: ')
    const { result, error } = await getCollection(watchListCollection);
    console.log(result);


    if (error) {
        return console.log(error);
    }

    return NextResponse.json({my_movies: result});
}

