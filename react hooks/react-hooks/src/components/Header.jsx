

import React,{useState} from 'react'
//rafc

const Header = () => {
    //estado y el que cambia la función = estado inicial
    const [darkMode,setDarkMode] = useState(false);
    
    //función que cambia el estado
    const handleClick = () => {
        setDarkMode(!darkMode); 
    }

    //Clic y alterna entre true y false
    return (
        <div className="Header">
            <h1>ReactHooks</h1>
            <button type="button" onClick={handleClick}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
            {/*Lo mismo pero más sencillo, es mejor con handleClick */}
            <button type="button" onClick={()=>setDarkMode(!darkMode)}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
        </div>
    )
}
export default Header;