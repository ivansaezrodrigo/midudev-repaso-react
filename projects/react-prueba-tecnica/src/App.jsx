import { useState, useEffect } from "react";
import { getRandomFact } from "./services/facts.js";
import { useCatImage } from "./hooks/useCatImage.js";

const CAT_PREFIX_IMAGE_URL = `https://cataas.com/`;

export function App() {
  const [fact, setFact] = useState();
  const { imageUrl } = useCatImage({ fact });

  // para recuperar la cita
  useEffect(() => {
    () => {
      getRandomFact().then((newFact) => setFact(newFact));
      console.log("ha funcionado");
    };
  }, []);

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui",
      }}
    >
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>

      {fact && <p style={{ maxWidth: "300px" }}>{fact}</p>}
      {imageUrl && (
        <img
          style={{ height: "300px", maxWidth: "300px", objectFit: "cover" }}
          src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
          alt="Imagen del gato"
        />
      )}
    </main>
  );
}
