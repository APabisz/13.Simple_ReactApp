import React from "react"
import { Link } from "react-router-dom"

import { useLocation } from "react-router-dom"

const Product = (id) => {
  const data = useLocation()
  const product = data.state.product
  return (
    <>
      <article className='item'>
        <h3 className='title'>{product.title}</h3>
        <div className='category'>category: {product.category}</div>
        <div className='image'>
          <img src={product.image} alt='' srcSet='' />
        </div>
        <div className='price'>
          Price: <span>{product.price} $</span>
        </div>

        <p className='description'>{product.description}</p>
        <Link className='goback' to='/products'>
          Return to products list
        </Link>
      </article>
    </>
  )
}

export default Product
