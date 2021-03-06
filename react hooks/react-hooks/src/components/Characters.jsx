import React, { useState,  useReducer, useMemo, useRef, useCallback } from 'react'
import Search from './Search';
import useCharacters from './hooks/useCharacter';

//rafce

//se encargará de agregar a favoritos
const initialState = {
  favorites: []
}

//favoriteReducer, si es ADD_TO_FAVORITE, toma el estado y le agrega favorites, luego action. payload
const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };

    default:
      return state;
  }
}

const Characters = () => {

 
  //creo la variable favorites y dispatch y le paso la función y el estado inicial.
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  //para el buscador
  const [search, setSearch] = useState('');

  //useRef
  const searchInput = useRef(null);

  //llamada a la API desde el archivo Characters.jsx
  const API = 'https://rickandmortyapi.com/api/character';
  const characters = useCharacters(API);


  //hago el handleClick y hago un dispatch del type (el cual es al action.type de arriba) y el payload de favorite
  const handleClick = favorite => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
  }

  //no es necesario usar event.target.value, esto sirve para cuando tenemos múltiples target
  // const hadleSearch = () => {
  //   console.log(searchInput)
  //   setSearch(searchInput.current.value);
  // }

  //no cambia por tanto no es necesario pasarle algo al array
  const hadleSearch = useCallback(
    () => {
      setSearch(searchInput.current.value)
    },
    [],
  )

  //función de filtro con memo para recordar los valores anteriores
  // (sin memo) const filteredUsers = characters.filter((user)=>{
  //   return user.name.toLowerCase().includes(search.toLowerCase());
  // })

  const filteredUsers = useMemo(() => 
    characters.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    }),[characters,search]
  )




  return (

    <div className="Characters">

      {/*Mostrar los favoritos, desde la variable, el estado */
        favorites.favorites.map(favorite => (
          <li style={{ marginBottom: "1%" }} key={favorite.id}>
            <h2>{favorite.name}</h2>
            <img src={favorite.image} alt={favorite.name} />
          </li>
        ))
      }

      {/*Buscador componentizado */}

      <Search search={search} searchInput={searchInput} hadleSearch={hadleSearch}/>

      {filteredUsers.map(character => (
        <div className="item" key={character.id}>
          <div className="character-image" >
            <h2>{character.name}</h2>
            <img src={character.image} />
            {/*Aquí hago una arrow function para enviar el character */}
            <button className="btnn" type="button" onClick={() => handleClick(character)}>Agregar a favoritos</button>
          </div>
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