import React from 'react'
import { products } from "../constant";

const ProductsSection = () => {

  return (
    
    <section className='product-section'>
        <div className="product-grid">
            {products.map((product) => (
                <div className="product-card" key={product.id}>
                  <img src={product.image} alt={product.name} className='product-img' />
                  <div className="product-details">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">
                     ₦{product.price.toLocaleString()}
                     <span className="product-old-price">₦{product.oldPrice.toLocaleString()}</span>
                     </p>
                  </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default ProductsSection