import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import '../assets/styles/App.scss'
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
const App = () => {
    //Funciones o lógica dentro de los componentes

    //use state
    const [videos, setVideos] = useState([]);
    //use efectt para ir a la fake api, y pasarsela a setVideos
    useEffect(() => {
        fetch('http://localhost:3000/initalState')
            .then(response => response.json())
            .then(data => setVideos(data));
    },[]);

    console.log(videos)

    return (
        <div className="App">
            <Header />
            <Search />
            {/*Sección 1 */}
            <Categories title="Mi lista">
                <Carousel>
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                </Carousel>
            </Categories>
            {/*Sección 2 */}
            <Categories title="Tendencias">
                <Carousel>
                    <CarouselItem />
                    <CarouselItem />
                </Carousel>
            </Categories>
            {/*Sección 3 */}
            <Categories title="Originales de Henrys video">
                <Carousel>
                    <CarouselItem />

                </Carousel>
            </Categories>
            <Footer />
        </div>
    );
};

export default App;