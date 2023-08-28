export function ListOfMovies({ movies }) {
    return (
      <ul>
        {
          movies.map(movie => (
            <li key={movie.id}>
              <h1>{movie.title}</h1>
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
    const hasMovies = movies?.length > 0
    
    return (
        hasMovies
        ? <ListOfMovies movies={movies}/>
        : <NoMoviesResults />
    )
}