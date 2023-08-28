import { useCatImage } from '../hooks/useCatImage.js'

export function Otro () {
  const { imageUrl } = useCatImage({ fact: 'Another cat' })
  return (
    <>
      {imageUrl && (
        <img
          style={{ height: "300px", maxWidth: "300px", objectFit: "cover" }}
          src={`${imageUrl}`}
          alt="Imagen del gato"
        />
      )}
    </>
  )
}