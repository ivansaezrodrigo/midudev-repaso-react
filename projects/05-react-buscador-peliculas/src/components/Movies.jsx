export function ListOfMovies({ movies }) {
    return (
      <ul className="movies">
        {
          movies.map(movie => (
            <li className="movie" key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.year}</p>
              <img src={movie.poster} alt={movie.title} />
            </li>
          )
          )
        }
      </ul>
    )
}

export function NoMoviesResults() {
    return (
        <p>No se encuentran peliculas con esas características..</p>
    )
}

export function Movies( {movies} ) {
  try{
    var hasMovies = movies?.length > 0
  } catch (e) {
    hasMovies = false
  }
    
    return (
        hasMovies
        ? <ListOfMovies movies={movies}/>
        : <NoMoviesResults />
    )
}