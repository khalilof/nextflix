import Image from 'next/image';
import { getWatchList } from '@/app/api/movies/getWatchListFunction';


export default async function WatchList() {

    const {result, error} = await getWatchList();
    const myWatchList = result;


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
