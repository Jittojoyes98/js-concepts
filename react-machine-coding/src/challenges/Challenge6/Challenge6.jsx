import React from 'react'
import { useState, useEffect } from 'react'
import './Challenge6.css'

const Challenge6 = () => {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const fetchProducts = async () => {
    const res = await fetch('https://dummyjson.com/products?limit=100')
    const data = await res.json()
    if (data?.products) {
      setProducts(data.products)
    }
  }
  const handlePagination = (page) => {
    if (page >= 1 && page <= products.length / 10) {
      setPage(page)
    }
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      <h1>Pagination</h1>
      <div className="product-wrapper">
        {products.length > 0 &&
          products.slice((page - 1) * 10, page * 10).map((prod) => {
            return (
              <div key={prod.id} className="product-card">
                <img src={prod.thumbnail} alt={prod.totle} />
                <span>{prod.title}</span>
              </div>
            )
          })}
      </div>
      <span className="page-button" onClick={() => handlePagination(page - 1)}>
        previous
      </span>
      {[...Array(products.length / 10)].map((_, id) => (
        <span
          className={`page-button ${page == id + 1 ? 'selected-page' : ''}`}
          onClick={() => handlePagination(id + 1)}
        >
          {id + 1}
        </span>
      ))}
      <span className="page-button" onClick={() => handlePagination(page + 1)}>
        next
      </span>
    </>
  )
}

export default Challenge6
