import {products} from './mocks/products.json'
import { Products } from './components/Products.jsx'
import './App.css'

function App() {
  return (
    <>
      <h1>Shopping Cart 🛒</h1>
      <Products products={products}/>
    </>
  )
}

export default App
