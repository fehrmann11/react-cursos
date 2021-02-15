
import './App.css';
import Header from './components/Header'
import Characters from './components/Characters';
function App() {
  return (
    <div className="App">
      <h1>Hola a todos</h1>
      <Header/>
      <Characters/>
      {/*Reto de ponerlo en una tarjeta, con darkmode y css */}
    </div>
  );
}

export default App;
