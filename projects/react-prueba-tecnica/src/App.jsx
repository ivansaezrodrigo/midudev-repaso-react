import { useCatFact } from "./hooks/useCatFact.js";
import { useCatImage } from "./hooks/useCatImage.js";

export function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    refreshFact()
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
          src={`${imageUrl}`}
          alt="Imagen del gato"
        />
      )}
    </main>
  );
}
