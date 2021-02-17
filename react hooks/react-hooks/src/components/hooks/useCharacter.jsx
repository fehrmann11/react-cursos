import {useState, useEffect} from 'react';

const useCharacters = url =>{

    const [Characters, setCharacters]= useState([]);
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data=> setCharacters(data.results))
    }, [url]);
    return Characters;
};

export default useCharacters;