const API_KEY = 'dc6121ed'

export const searchMovies = async ({search}) => {
    if (search === '') return null

    try {
        const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`)
        const json = await response.json()
     
        const movies = json.Search
    
        return movies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        poster: movie.Poster,
        year: movie.Year
        }
        ))
    
    } catch (e) {
        throw new Error('Error searching movies')
    }
   
}