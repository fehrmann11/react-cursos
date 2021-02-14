import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import '../assets/styles/App.scss'
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initalState';

const App = () => {
    //Funciones o lógica dentro de los componentes

    //Traigo los valores
    const initialState = useInitialState(API);

    return (
        <div className="App">
            <Header />
            <Search />
            {/*Sección 1, validación si es que mi lista está vacía */}
            {initialState.mylist.length > 0 &&
                (<Categories title="Mi lista">
                    <Carousel>
                        {
                            initialState.mylist.map(item=>
                                <CarouselItem key={item.id} {...item}/>)
                        }
                        
                    </Carousel>
                </Categories>)
            }

            {/*Sección 2 aquí mapeamos cadá carouselItem de trends
            {...item}=destructurar todo el contenido*/}
            <Categories title="Tendencias">
                <Carousel>
                    {initialState.trends.map(item => 
                        <CarouselItem key={item.id} {...item}/>
                    )
                    }
                    
                </Carousel>
            </Categories>
            {/*Sección 3 */}
            <Categories title="Originales de Henrys video">
                <Carousel>
                    {initialState.originals.map(item =>
                       <CarouselItem key={item.id} {...item}/> )}
                    
                </Carousel>
            </Categories>
            <Footer />
        </div>
    );
};

export default App;