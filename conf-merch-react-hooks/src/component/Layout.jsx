import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/components/Layout.css';

//Esto contiene el Header y footer y también con el children mantiene la persistencia de los datos.

const Layout = ({children}) => {
    return (
        <div className="Main">
            <Header />
            {/*Para enviar otro componente que será render en otro momento */}
            {children}
            <Footer/>
        </div>
    )
}

export default Layout;
