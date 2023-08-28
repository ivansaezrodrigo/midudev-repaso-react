import './App.css'
import { useEffect, useState } from 'react'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import withoutResults from './mocks/no-results.json'

function App() {
  const movies = useMovies()
  const [query,setQuery] = useState('')
  const [error,setError] = useState(null)

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
    //const query = fields.get('query')
    //
    // Object.fromEntries:
    //const {query} = Object.fromEntries(new window.FormData(event.target))

    console.log({query})
  }

  const handleChange = (event) =>{
    setQuery(event.target.value)
  }

  useEffect(()=>{
    // ZOD es una buena librería para validar datos
    setError(null)
    if(query.length < 3) setError('La búsqueda ha de tener al menos 3 carácteres.')
    if(query === "") setError('No se puede buscar una película vacía.')
    if(query.match(/^\d+$/)) setError('No se puede buscar una película con un número.')

  },[query])

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} type="text" name="query" placeholder='The Avengers, Star Wars, The Matrix...' />
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
