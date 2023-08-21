import { useEffect,useState } from "react";

const CAT_PREFIX_IMAGE_URL = `https://cataas.com/`;

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
  
    return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` };
  } // {imageUrl: 'https://...'}
  