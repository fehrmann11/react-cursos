import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AppContext from '../context/AppContext';
import '../styles/components/Checkout.css';

const Checkout = () => {
    //treamos state y remove desde context y cart que es la api
    const { state, removeFromCart } = useContext(AppContext);
    const { cart } = state;

    /*Función que se encarga de eliminar del 
    carrito */
    const handleRemove = (product, i) => () => {
        removeFromCart(product, i);
    };
    /*Función que se encarga de sumar 
    todo lo que está en el carrito */
    const handleSumTotal = () => {
        /*const array1 = [1, 2, 3, 4];
        const reducer = (accumulator, currentValue) => accumulator + currentValue;

        // 1 + 2 + 3 + 4
        console.log(array1.reduce(reducer));
        // expected output: 10

        // 5 + 1 + 2 + 3 + 4
        console.log(array1.reduce(reducer, 5));
        // expected output: 15
        */
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    }
    return (
        <>
            <Helmet>
                <title>Lista de pedidos - Conf Merch</title>
            </Helmet>
            <div className="Checkout">
                <div className="Checout-content">
                    {cart.length > 0 ? <h3>Lista de pedidos:</h3> : <h3>Sin pedidos....</h3>}
                    {/* Lista de pedidos */}
                    {cart.map((item, i) => (
                        <div className="Checkout-item">
                            <div className="Checkout-element">
                                <h4>{item.title}</h4>
                                <span>${item.price}</span>
                            </div>
                            <button type="button" onClick={handleRemove(item, i)}>
                                <i className="fas fa-trash-alt" />
                            </button>
                        </div>

                    ))}

                </div>
                {/* Cuando tiene algo suma los pedidos */}
                {cart.length > 0 && (
                    <div className="Checkout-sidebar">
                        <h3>{`Precio total: $ ${handleSumTotal()}`}</h3>
                        <Link to="/checkout/information">
                            <button type="button">Continuar Pedido</button>
                        </Link>

                    </div>
                )}

            </div>
        </>
    )
}

export default Checkout;