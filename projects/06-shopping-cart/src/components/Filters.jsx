import './Filters.css'
import { useState, useId } from 'react'

export function Filters({ onChange }) {
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        // aquí algo esta regular
        // DOS FUENTES DE LA VERDAD
        setMinPrice(event.target.value)
        onChange(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCatergory = (event) => {
        // aquí algo esta regular
        // estamos pasando la función de actualizar estado nativa a un componente hijo
        setMinPrice(event.target.value)
        onChange(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">
            <div className="">
                <label htmlFor={minPriceFilterId}>Min price</label>
                <input type="range" id={minPriceFilterId} min='0' max='1700' onChange={handleChangeMinPrice} />
                <span>${minPrice}</span>
            </div>

            <div className="">
                <label htmlFor={categoryFilterId}>Category</label>
                <select name="" id={categoryFilterId} onChange={handleChangeCatergory}>
                    <option value="all">All</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Smartphones</option>
                </select>
            </div>

        </section>
    )
}