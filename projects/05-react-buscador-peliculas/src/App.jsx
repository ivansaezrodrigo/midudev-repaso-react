import './App.css'

function App() {
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
        #Aquí irán los resultados
      </main>
    </div>
  )
}

export default App
