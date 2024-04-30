import Image from 'next/image'
import Link from 'next/link';
import AddToWatchList from '@/app/components/AddToWatchList';
import AddToWatchList2 from '@/app/components/AddToWatchList2';

export default function MovieCard({title, release_date, poster_path, overview, id}: {title: string, release_date: string, poster_path: string, overview: string, id: string}) {

    return (
        <div className="movie-card">
            <Image
                src={ `https://image.tmdb.org/t/p/original${ poster_path }` }
                alt={ title }
                width={ 320 }
                height={ 480 }
                layout="responsive"
                placeholder='blur'
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8b8RQDwAFGwGyY6GjKAAAAABJRU5ErkJggg=="
                className="object-cover"
            />
                <div className="absolute-overlay">
                <div className="details">
                    <h3>{ title }</h3>
                    <p>{ release_date }</p>
                    <p>{ overview }</p>
                    <div className="actions">
                        <Link href={ `/movie/${ id }` } className="link">
                            More Info
                        </Link>
                        <AddToWatchList movieId={id} key={id}/>
                    </div>
                </div>
            </div>
        </div>
    )
}