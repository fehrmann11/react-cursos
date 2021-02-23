import React from 'react';
import initialState from '../initialState';
import Products from '../component/Products';

//Este tiene la api
const Home = () => {
    return (
        <Products products={initialState.products} />
    )
}

export default Home;
