import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { useContext, useState } from 'react'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import './App.css'
import { IS_DEVELOPMENT } from './config'
import { useFilters } from './hooks/useFilters'

function App() {
  const {filterProducts} = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      <Footer/>
    </>
  )
}

export default App
