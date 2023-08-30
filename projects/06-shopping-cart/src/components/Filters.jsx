import './Filters.css'
import { useState } from 'react'

export function Filters({onChange}) {
    const [minPrice, setMinPrice] = useState(0)

    const handleChangeMinPrice = (event) =>{
        setMinPrice(event.target.value)
    }


    return(
        <section className="filters">
            <div className="">
                <label htmlFor="price">Min price</label>
                <input type="range" name="" id="price" min='0' max='1700' onChange={handleChangeMinPrice}/>
                <span>${minPrice}</span>
            </div>

            <div className="">
                <label htmlFor="category">Category</label>
                <select name="" id="category">
                    <option value="all">All</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Smartphones</option>
                </select>
            </div>

        </section>
    )
}