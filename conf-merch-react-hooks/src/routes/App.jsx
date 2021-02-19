import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';

const App = () => {
    return (
        /*BrowserRouter encapsular toda la navegación de la aplicación
        Switch: mostrar el primero que coincida con exactitud la ruta que uno elige
        Route: La ruta
        
        */
        <BrowserRouter>
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
        </BrowserRouter>
    )
}

export default App;
