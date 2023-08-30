import { useRef, useState, useMemo } from 'react'
import { searchMovies } from '../services/movies'


export function useMovies( { search , sort }) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previousSearch = useRef(search)
    
    const getMovies = async () => {
      if (search == previousSearch.current) return
      try {
        setLoading(true)
        setError(null)
        previousSearch.current = search
        const newMovies = await searchMovies({search})
        setMovies(newMovies)
      } catch(e){
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }

    // const getSortedMovies = () => {
    //   const sortedMovies = sort
    //   ? [...movies].sort((a,b) => a.title.localeCompare(b.title))
    //   : movies

    //   return sortedMovies
    // }

    const sortedMovies = useMemo(()=>{
      console.log('memo sorted')
      return sort
      ? [...movies].sort((a,b) => a.title.localeCompare(b.title))
      : movies
    },[sort, movies])


    return {movies: sortedMovies, loading, getMovies}
  }