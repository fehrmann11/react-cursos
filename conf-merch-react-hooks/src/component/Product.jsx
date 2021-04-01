import React from 'react';

const Product = ({product,handleAddToCart}) => {
     
    return (
        <div className="Products-item">
            <img src={product.image} alt={product.title} />
            <div className="Product-item-info">
                <h2>{product.title}
                    <span>${product.price}</span>
                </h2>
                <p>{product.description}</p>
            </div>
            {/* ya viene con un producto la función hadleAddToCart */}
            <button type="button" onClick={handleAddToCart(product)}>Comprar</button>
        </div>
    )
}

export default Product;
