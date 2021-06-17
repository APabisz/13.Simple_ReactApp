import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../styles/ProductListPage.css"

// const products = ["car", "bike", "motocycle"]

const ProductListPage = () => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState(null)

  useEffect(() => {
    let isCancelled = false
    setLoading(true)
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => {
        if (!isCancelled) {
          return res.json()
        }
      })
      .then((data) => {
        if (!isCancelled) {
          return createProductsList(data)
        }
      })
      .then(setLoading(false))
      .catch((e) => {
        if (!isCancelled) {
          new Error(e)
        }
      })

    return () => {
      isCancelled = true
    }
  }, [])

  const createProductsList = (data) => {
    data = data.sort((a, b) => 0.5 - Math.random())
    do {
      data.splice(Math.floor(Math.random() * data.length), 1)
    } while (data.length > 5)

    const list = data.map((product) => (
      <div className='product' key={product.id}>
        <h3 className='title'>{product.title}</h3>
        <div className='info'>
          <div className='image'>
            <img src={product.image} alt='' srcSet='' />
          </div>
          <p className='description'>{product.description}</p>
        </div>
        <Link
          className='link'
          to={{ pathname: `/product/${product.id}`, state: { product } }}
        >
          <p>Read more...</p>
        </Link>
      </div>
    ))
    setProducts(list)
  }
  // const list = products.map((product) => (
  //   <li key={product}>
  //     <Link to={`/product/${product}`}>{product}</Link>
  //   </li>
  // ))

  return (
    <>
      <div className='products'>
        <h3>Products</h3>
        <div>
          {loading && "Loading..."}
          {products}
        </div>
      </div>
    </>
  )
}

export default ProductListPage
