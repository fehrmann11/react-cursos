const reducer = (state,action) => {
    console.log(action)
    switch (action.type) {
        
        case 'SET_FAVORITE':
            return {
                ...state,
                //lo que está en myslist y le agrego lo que está en el payload
                mylist: [...state.mylist,action.payload]
            }
        case 'DELETE_FAVORITE':
            return{
                ...state,
                //evaluar el valor id, si está en la lista 
                mylist: state.mylist.filter(items => items.id !== action.payload)
            }
        default:
            return state;
    }

}

export default reducer;