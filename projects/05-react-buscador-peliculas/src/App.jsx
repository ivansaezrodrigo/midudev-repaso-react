import './App.css'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'


function App() {

  const movies = useMovies()


  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className="form">
          <input type="text" name="input" id="" placeholder='The Avengers, Star Wars, The Matrix...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
