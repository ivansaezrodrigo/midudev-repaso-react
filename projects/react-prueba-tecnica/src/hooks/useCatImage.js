import { useEffect,useState } from "react";

export function useCatImage({ fact }) {
    const [imageUrl, setImageURL] = useState();
  
    // para recuperar la imagen cada vez que cambie la cita
    useEffect(() => {
      if (!fact) return;
      const firstWord = fact.split(" ", 3).join(" ");
  
      fetch(
        `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
      )
        .then((res) => res.json())
        .then((response) => {
          const { url } = response;
          setImageURL(url);
        });
    }, [fact]);
  
    const handleClick = async () => {
      const newFact = await getRandomFact();
      setFact(newFact);
    };
  
    return { imageUrl };
  } // {imageUrl: 'https://...'}
  