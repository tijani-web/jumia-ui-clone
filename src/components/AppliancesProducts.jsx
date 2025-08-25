import React from 'react'
import { applianceProducts } from "../constant";

const AppliancesProducts = () => {
  return (
    <div className="appliances-product-grid">
  {applianceProducts.map((product) => (
    <div key={product.id} className="appliances-product-card">
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

export default AppliancesProducts