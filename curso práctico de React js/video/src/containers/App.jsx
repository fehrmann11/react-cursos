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
    const [videos, setVideos] = useState({mylist:[],trends:[],originals:[]});
    //use efectt para ir a la fake api, y pasarsela a setVideos
    useEffect(() => {
        fetch('http://localhost:3000/initalState')
            .then(response => response.json())
            .then(data => setVideos(data));
    }, []);

    return (
        <div className="App">
            <Header />
            <Search />
            {/*Sección 1, validación si es que mi lista está vacía */}
            {videos.mylist.length > 0 &&
                (<Categories title="Mi lista">
                    <Carousel>
                        <CarouselItem />
                    </Carousel>
                </Categories>)
            }

            {/*Sección 2 aquí mapeamos cadá carouselItem de trends
            {...item}=destructurar todo el contenido*/}
            <Categories title="Tendencias">
                <Carousel>
                    {videos.trends.map(item => 
                        <CarouselItem key={item.id} {...item}/>
                    )
                    }
                    
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