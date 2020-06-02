import React, { useState, useEffect } from 'react'

import Header from './components/Header/Header'
import NewProduct from './components/Products/NewProduct'
import ProductList from './components/Products/ProductList'
import './App.css'

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [loadedProducts, setLoadedProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true)
      const response = await fetch('http://localhost:5000/products')

      const responseData = await response.json()

      setLoadedProducts(responseData.products)
      setIsLoading(false);
    }

    fetchProducts()
  }, [])

  const addProductHandler = async (productName, productPrice) => {
    const product = {
      name: productName,
      price: +productPrice
    }
    try {
      const response = await fetch('http://localhost:5000/products', {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const responseData = await response.json()

      setLoadedProducts(responseData.products)
      
    } catch (err) {
      alert(err.message || 'Something went wrong!')
    }
  }

  return (
    <React.Fragment>
      <Header />
      <main>
        <NewProduct onAddProduct={addProductHandler} />
        {isLoading && <p className="loader">Loading...</p>}
        {!isLoading && <ProductList products={loadedProducts} />}
      </main>
    </React.Fragment>
  )
}

export default App

