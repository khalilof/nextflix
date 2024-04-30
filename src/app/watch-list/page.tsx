import Image from 'next/image';
import { Suspense } from 'react';


export default async function WatchList() {
    let apiURL = '';
    if (process.env.NEXT_PUBLIC_VERCEL_URL) {
        apiURL = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/movies`;
    } else {
        apiURL = 'http://localhost:3000/api/movies';
    }
     const getMyMovies = await fetch(apiURL, {
         method: 'GET',
         cache: 'no-store'});
     const myWatchList = (await getMyMovies.json()).my_movies;


    return (
        <div className="watchlist">
            {
                myWatchList.map((it: any) => (
                    <ul key={it.id}>
                        <li>
                            <div>
                                <div>
                                    <Image className="w-8 h-8 rounded-full"
                                           placeholder='blur'
                                           blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8b8RQDwAFGwGyY6GjKAAAAABJRU5ErkJggg=="
                                           src={ 'https://image.tmdb.org/t/p/original' + it.poster_path }
                                           width="160"
                                           height="240"
                                           priority
                                           alt={ it.title }
                                    />
                                </div>
                                <div>
                                    <p>
                                        { it.title }
                                    </p>
                                </div>
                                <div>
                                    { it.release_date }
                                </div>
                            </div>
                        </li>
                    </ul>
                ))
            }
        </div>
    )
}
