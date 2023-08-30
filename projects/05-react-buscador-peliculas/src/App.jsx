import './App.css'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import { useSearch } from './hooks/useSearch.js'


function App() {
  const {search, updateSearch, error} = useSearch()
  const {movies, loading, getMovies} = useMovies({search})

  console.log('render')

  const handleSubmit = (event) => {
    event.preventDefault()

    // [Formas no controladas]
    //
    // Use ref:
    //const value = inputRef.current.value
    //
    // window.FormData:
    //const fields = new window.FormData(event.target)
    //const search = fields.get('search')
    //
    // Object.fromEntries:
    //const {search} = Object.fromEntries(new window.FormData(event.target))

    getMovies()
  }

  const handleChange = (event) =>{
    const newsearch = event.target.value
    if (newsearch.startsWith(' ')) return
    updateSearch(newsearch)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input style={{border: '1px solid transparent', borderColor: error ? 'red': 'transparent'}} onChange={handleChange} value={search} type="text" name="search" placeholder='The Avengers, Star Wars, The Matrix...' />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color:'red'}}>{error}</p>}
      </header>
      <main>
        {
        loading ? <p>Cargando..</p> : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
