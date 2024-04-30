import { getMovieByIdAPI } from '@/app/helper/ApiURLFactory';
import Image from 'next/image';
import AddToWatchList from '@/app/components/AddToWatchList';

export default async function MovieDetails({params}: {params: any}) {
    const {id} = params;
    console.log('searching for: ',  id);
    const movieResponse = await fetch(getMovieByIdAPI(id));
    const movie = await movieResponse.json();

    console.log(movie);

  return (
      <div className="movie-details">
          <Image
              placeholder='blur'
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8b8RQDwAFGwGyY6GjKAAAAABJRU5ErkJggg=="
              src={ 'https://image.tmdb.org/t/p/original' + movie.poster_path }
              width={ 160 }
              height={ 160 }
              priority
              alt={ movie.title }
          />
          <div>
              <h1>{ movie.title }</h1>
              <h3> / { movie.release_date } / Rate: { movie.vote_average }</h3>
              <span>{ movie.overview }</span>
              <div>
                  { movie.genres.map((genre: any) => (<span key={ genre.name }>{ genre.name }</span>)) }
              </div>

              <AddToWatchList movieId={ movie.id } key={ movie.id }/>
          </div>

      </div>
  )
}
