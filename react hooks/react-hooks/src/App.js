import { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Characters from './components/Characters';
import ThemeContext from './context/ThemeContext';

function App() {

  const [theme, updateTheme] = useState("bg-light");

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <div className={'App ' + theme}>
        <Header />
        <Characters />
        {/*Reto de ponerlo en una tarjeta, con darkmode y css */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
