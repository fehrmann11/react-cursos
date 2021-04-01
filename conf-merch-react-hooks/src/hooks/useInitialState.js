import {useState} from 'react';
import initialState from '../initialState';
/*
-Guardará el initialState o los datos de la api
-Funciones que nos ayudará a agregar y eliminar del carrito
-Esto estará conectado con toda la aplicación y tener un store compartido.

Se encarga de manejar el estado, recibirlas y generar funciones que actualizan
según el caso, agregar y eliminar del carro
*/
const useInitialState = () =>{
    //destructuración del estado
    const [state,setState] = useState(initialState);

    /*lógica de agregar al carrito
    -Separar la información que recibe y separarlo al estado
    */
    const addToCart = payload => {
        setState({
            ...state,
            //trae lo que tiene cart del estado, agregale lo que esté en el paylad (lo que le estoy mandando)
            cart: [...state.cart, payload]
        });
        console.log(payload,"soy payl")
    }

    /*Lógica remover el item */
    const removeFromCart = (_payload,indexRemove) =>{
        setState({
            ...state,
            //filtra por items que sean distintos al que le mandemos
            cart: state.cart.filter((_item,indexCurrent)=>indexCurrent !== indexRemove),
        })
    };
    /*Función de añadir el pago */
    const addToBuyer= payload =>{
        setState({
            ...state,
            buyer:[...state.buyer,payload]
        })
    }

    return {
        addToCart,
        removeFromCart,
        state,
        addToBuyer,
    };
};

export default useInitialState;