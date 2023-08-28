import './App.css'
import { useEffect, useState } from 'react'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import withoutResults from './mocks/no-results.json'


function useSearch() {
  const [search,updateSearch] = useState('')
  const [error,setError] = useState(null)

  useEffect(()=>{
    // ZOD es una buena librería para validar datos
    setError(null)
    if(search.length < 3) setError('La búsqueda ha de tener al menos 3 carácteres.')
    if(search === "") setError('No se puede buscar una película vacía.')
    if(search.match(/^\d+$/)) setError('No se puede buscar una película con un número.')
  },[search])

  return {search, updateSearch, error}
}


function App() {
  const movies = useMovies()
  const {search, updateSearch, error} = useSearch()

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

    console.log({search})
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
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
