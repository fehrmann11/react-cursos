import React from 'react'
import Header from './Header';
import Footer from './Footer';


const Layout = ({children}) =>(
    <div className="App">
        <Header/>
        {/* empuja el compoenete que necesito según la ruta */}
        {children}
        <Footer />
    </div>
);

export default Layout;
