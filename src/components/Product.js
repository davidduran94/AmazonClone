import React from 'react'
import "./Product.css"

function Product({title, image, price,rating=4}) {
    return (
        <div className="product">
            <div className="product__info">
                <p>The lean startup</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>12.44</strong>
                </p>
            </div>
            <div className="product__rating">
                {
                      Array(rating)
                      .fill()
                      .map((_, i) => (
                        <p>⭐</p>
                        ))
                }
            
                
            </div>
            <img src="https://pisces.bbystatic.com/image2/BestBuy_MX/images/products/1000/1000226032_sd.jpg" 
                alt="" />

            <button>Add to basket</button>
        </div>
    )
}

export default Product
