import React from "react"
import Product from "../components/Product"
import "../styles/ProductPage.css"

const ProductPage = ({ match }) => {
  return (
    <>
      <div className='product-title'>Details of product</div>
      <Product id={match.params.id} />
    </>
  )
}

export default ProductPage
