import { useState } from 'react';
import './App.css';
import Page from './Page';
import { MovieContext } from './context';

function App() {
  const [count, setCount] = useState(0);
  const [cartData, setCartData] = useState([]);

  return (
    <>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <Page />
      </MovieContext.Provider>
    </>
  );
}

export default App;
