import { useState, useEffect } from "react";
import { getRandomFact } from "./services/facts.js";

const CAT_PREFIX_IMAGE_URL = `https://cataas.com/`

export function App() {
    const [ fact, setFact] = useState()
    const [ imageUrl, setImageURL] = useState()


    // para recuperar la cita
    useEffect(()=>{()=> {
        getRandomFact().then(newFact => setFact(newFact));
        console.log('ha funcionado')
    }},[])

    // para recuperar la imagen cada vez que cambie la cita
    useEffect(()=>{
        if (!fact) return
        const firstWord = fact.split(' ',3).join(' ')
        
        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
        .then(res => res.json())
        .then(
            response => {
                const { url } = response
                setImageURL(url)
            }
        )
    },[fact])

    const handleClick = async () =>{
        const newFact = await getRandomFact()
        setFact(newFact)
    }


    return (
        <main style={{display:'flex', flexDirection: 'column', alignItems:'center' ,justifyContent:'center', fontFamily:'system-ui'}}>
            <h1>App de gatitos</h1>

            <button onClick={handleClick}>Get new fact</button>

            {fact && <p style={{maxWidth:'300px'}} >{fact}</p>} 
            {imageUrl && <img style={{height: '300px',maxWidth:'300px', objectFit:'cover'}} src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt="Imagen del gato"/>}
        </main>
    );
}
