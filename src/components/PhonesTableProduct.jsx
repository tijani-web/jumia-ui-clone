import React from 'react'
import { phonesTabletsProducts } from "../constant";

const PhonesTableProduct = () => {
  return (
    <div className="phone-tablet-grid appliances-product-grid">
        {phonesTabletsProducts.map((product) => (
            <div key={product.id} className="phone-tablet-card appliances-product-card">
                <img src={product.image} alt={product.name} className="appliances-product-image" />
                <div className="appliances-product-info">
                  <div className="appliances-product-name">{product.name}</div>
                  <div className="appliances-product-pricing">
                    <span className="appliances-price">{product.price}</span>
                    <span className="appliances-old-price">{product.oldPrice}</span>
                  </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default PhonesTableProduct