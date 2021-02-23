import React from 'react';
import Product from './Product';
import '../styles/components/Products.css';

//Data general (todo el array)
const Products = ({products}) => {
    //console.log(products)
    return (
        <div className="Products">
            <div className="Products-items">
                {/*Cuando es map de una cosa hay que poner () y no {}, para que funcione.  */}
                {products.map(product =>(
                    
                    <Product key={product.id} product={product}/>
                
                ))}
            </div>
        </div>
    )
}

export default Products;
