import { useEffect, useState } from 'react'

export function useSearch() {
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
  