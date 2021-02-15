import React, {useState,useEffect} from 'react'

//rafce

const Characters = () => {

    const [characters,setCharacters] = useState([]);

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response=>response.json())
        .then(data=>setCharacters(data.results));
    },[])
    console.log(characters)
    return (
      
        <div className="Characters">
            {characters.map(character =>(

                <div className="character-image" key={character.id}>
                <h2>{character.name}</h2>
                <img  src={character.image}/>
                </div>
            ))}
            
        </div>
    )
}


export default Characters;


/*
con async y await

import React, { useState, useEffect } from "react";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    setCharacters(data.results);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="Characters">
      {characters.map((character) => (
        <h2 key={character.id}>{character.name}</h2>
      ))}
    </div>
  );
};

export default Characters;

*/