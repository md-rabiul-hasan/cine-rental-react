import { useState } from 'react';
import './App.css';
import Page from './Page';
import { DarkContenxt, MovieContext } from './context';

function App() {
  const [count, setCount] = useState(0);
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <DarkContenxt.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ cartData, setCartData }}>
          <Page />
        </MovieContext.Provider>
      </DarkContenxt.Provider>
    </>
  );
}

export default App;
