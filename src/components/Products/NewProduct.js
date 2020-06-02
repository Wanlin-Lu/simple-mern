import React, { useState } from 'react'

import Input from '../Input/Input'
import Button from '../Button/Button'
import './NewProduct.css'

const NewProduct = props => {
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')

  const changeHandler = event => {
    if (event.target.id === 'name') {
      setProductName(event.target.value)
    } else {
      setProductPrice(event.target.value)
    }
  }

  const submitProductHandler = event => {
    event.preventDefault()
    props.onAddProduct(productName, productPrice)
  }
  return (
    <section id="new-product">
      <h2>Add a New Product</h2>
      <form onSubmit={submitProductHandler}>
        <Input
          id="name"
          label="Name"
          type="text"
          value={productName}
          onChange={changeHandler}
        />
        <Input
          id="price"
          label="Price"
          type="number"
          step={0.1}
          value={productPrice}
          onChange={changeHandler}
        />
        <Button type="submit">ADD PRODUCT</Button>
      </form>
    </section>
  );
}

export default NewProduct