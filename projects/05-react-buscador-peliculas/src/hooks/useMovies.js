import { useState } from 'react'
import withResults from '../mocks/with-results.json'
import withoutResults from '../mocks/no-results.json'


export function useMovies( { search }) {
    const [responseMovies, setResponseMovies] = useState([])
    
    const movies = responseMovies.Search
  
    const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      poster: movie.Poster,
      year: movie.Year
    }
    ))
    
    const getMovies = () => {
      if (search) {
        //setResponseMovies(withResults)
        fetch(`https://www.omdbapi.com/?s=${search}&apikey=dc6121ed`)
        .then(res => res.json())
        .then(json => {
          setResponseMovies(json)
        })
      } else {
        setResponseMovies(withoutResults)
      }
    }

    return {movies:mappedMovies, getMovies}
  }