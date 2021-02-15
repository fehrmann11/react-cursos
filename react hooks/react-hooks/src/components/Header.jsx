

import React,{useState,useContext} from 'react'
import ThemeContext from '../context/ThemeContext';
//rafc

const Header = () => {
    //estado y el que cambia la función = estado inicial
    const [darkMode,setDarkMode] = useState(false);
    const {theme,updateTheme} = useContext(ThemeContext);
    //const color = useContext(ThemeContext);
    
    //función que cambia el estado
    const handleClick = () => {
        setDarkMode(!darkMode); 
        theme ==="bg-light"?updateTheme("bg-dark"):updateTheme("bg-light");
    }


    //Clic y alterna entre true y false
    return (
        <div className="Header">
            <h1> Cambiar de fondo</h1>
            <button type="button" onClick={handleClick}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>

        </div>
    )
}
export default Header;