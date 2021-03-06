import {useState,useEffect} from 'react';
import initialState from '../initialState';
/*
-Guardará el initialState o los datos de la api
-Funciones que nos ayudará a agregar y eliminar del carrito
-Esto estará conectado con toda la aplicación y tener un store compartido.

Se encarga de manejar el estado, recibirlas y generar funciones que actualizan
según el caso, agregar y eliminar del carro
*/

import axios from 'axios';

const API = 'http://localhost:1337/products';

const useInitialState = () =>{
    //destructuración del estado
    const [state,setState] = useState(initialState);
    const [products,setProducts] = useState([]);

    //llamo a la api, para poner los productos, es importante saber que cuando inicia la aplicación lo llama.
    useEffect(async() => {
        const response = await axios(API);
        setProducts(response.data);
    }, [])

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

    const addNewOrder = payload => {
        setState({
            ...state,
            orders:[...state.orders,payload]
        })
    }

    return {
        addToCart,
        removeFromCart,
        state,
        addToBuyer,
        addNewOrder,
        products
    };
};

export default useInitialState;