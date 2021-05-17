import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import Layout from '../component/Layout';

import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
    //Retorna Varios elementos y las funciones que necesitamos
    const initialState = useInitialState();
    const isEmpty = Object.keys(initialState.state).length;
    return (
        /*BrowserRouter encapsular toda la navegación de la aplicación
        Switch: mostrar el primero que coincida con exactitud la ruta que uno elige
        Route: La ruta
        
        */      

        <>
        {isEmpty >0 ? (
            <AppContext.Provider value={ initialState}>
            <BrowserRouter>
                <Layout>
                    {/*Este es el children de Layout */}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        {/*Detalle de los productos */}
                        <Route exact path="/checkout" component={Checkout} />
                        {/*Información de que va a comprar */}
                        <Route exact path="/checkout/information" component={Information} />
                        {/*Información del pago */}
                        <Route exact path="/checkout/payment" component={Payment} />
                        {/*Pago exitoso */}
                        <Route exact path="/checkout/success" component={Success} />
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
        ): <h1>Cargando.....</h1>}
        
        </>
    )
}

export default App;
