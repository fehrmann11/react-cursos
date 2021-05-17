/* encarga de describir la información que queremos 
hacer y pasar un objeto, toma la acción y evalua
 en como lo guarda en el estado */


//RETURN EXPLICITO
 export const setFavorite = payload => ({
     type: 'SET_FAVORITE',
     payload,
 });

 /*Eliminar de setFavorite */
 export const deleteFavorite = payload =>({
     type: 'DELETE_FAVORITE',
     payload,
 });