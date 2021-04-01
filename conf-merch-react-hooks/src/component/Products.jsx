import React, {useContext} from 'react';
import Product from './Product';
import '../styles/components/Products.css';
import AppContext from '../context/AppContext';

//Data general (todo el array)
const Products = () => {
    //La data en el estado inicial
    const {state,addToCart} = useContext(AppContext);
    //sacar los productos del estado
    const {products} = state;
    console.log(products,"soy product")
    //función que maneja agregar al carrito
    const handleAddToCart =product=> () => {
        addToCart(product)
    }

    return (
        <div className="Products">
            <div className="Products-items">
                {/*Cuando es map de una cosa hay que poner () y no {}, para que funcione.  */}
                {products.map(product =>(
                    
                    <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
                
                ))}
            </div>
        </div>
    )
}

export default Products;
