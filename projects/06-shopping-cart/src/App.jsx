import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { useContext, useState } from 'react'
import { Filters } from './components/Filters.jsx'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import './App.css'
import { IS_DEVELOPMENT } from './config'
import { FiltersContext } from './context/filters'

function useFilters () {
  const {filters, setFilters} = useContext(FiltersContext)

  const filterProducts = (products) =>
  (products.filter(product => {
    return (
      product.price >= filters.minPrice && (
        filters.category == 'all' ||
        product.category === filters.category
      )
    )
  }))

  return {filters, filterProducts, setFilters}
}


function App() {
  const {filters, filterProducts, setFilters} = useFilters()
  const [products] = useState(initialProducts)

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT ? <Footer filters={filters}/> : <Footer/>}
    </>
  )
}

export default App
