import React from 'react'

import ProductItem from './ProductItem'
import './ProductList.css'

const ProductList = props => {
  let content
  if (!props.products || props.products.length === 0) {
    content = <p>Could not find any products. Maybe create one?</p>
  } else {
    content = (
      <ul className="product-list">
        {props.products.map(p => <ProductItem key={p._id} name={p.name} price={p.price} />)}
      </ul>
    )
  }

  return <section id="products">{content}</section>
}

export default ProductList