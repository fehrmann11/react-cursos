import React from 'react';
import Header from '../components/Header'
import '../assets/styles/App.scss'
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
const App = () => (
    <div className="App">
        <Header/>
        <Search/>
        {/*Sección 1 */}
        <Categories title="Mi lista">
            <Carousel>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
            </Carousel>
        </Categories>
        {/*Sección 2 */}
        <Categories title="Tendencias">
            <Carousel>
                <CarouselItem/>
                <CarouselItem/>
            </Carousel>
        </Categories>
        {/*Sección 3 */}
        <Categories title="Originales de Henrys video">
            <Carousel>
                <CarouselItem/>

            </Carousel>
        </Categories>
        <Footer/>
    </div>
);

export default App;