export const dynamic = 'force-dynamic';
import MovieCard from '@/app/components/MovieCard';
import { searchMovieAPI } from '@/app/helper/ApiURLFactory';

export default async function Home({searchParams}: {
  searchParams?: { [key: string]: string };
})  {
  let movies = [];
  if(searchParams) {
    let search = searchParams['search'];
    if (search && search.length <= 0) {
        search = 'interstellar';
    }
    if(search) {
      const moviesResponse = await fetch(searchMovieAPI(search));
      movies = (await moviesResponse.json()).results;
    }

  } else {
    throw new Error('no params read');
  }
  return (
      <main className="home-page">
        <div className="container">
          <form>
            <input type="text" aria-label="Search Movie" placeholder="Search Movie..." name="search"/>
            <button type="submit">Search</button>
          </form>
        </div>

        <div className="results-container">
          { movies.length > 0 ?
              <div className="grid">
                { movies.map((movie: any) => (
                    <MovieCard
                        key={ movie.id }
                        {...movie}
                    />
                ))}
              </div>
              : <h2 className="nothing-to-show">Nothing to show</h2>
          }
        </div>
      </main>
  )
}
