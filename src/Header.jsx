import React, { useContext, useState } from 'react';
import Moon from './assets/icons/moon.svg';
import Sun from './assets/icons/sun.svg';
import Logo from './assets/logo.svg';
import Ring from './assets/ring.svg';
import Cart from './assets/shopping-cart.svg';
import { DarkContenxt, MovieContext } from './context';
import CartDetails from './movie/CartDetails';

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const { cartData, setCartData } = useContext(MovieContext);
  const { darkMode,setDarkMode } = useContext(DarkContenxt);

  // Close the cart details
  function handleCartDetailsClose() {
    setShowCart(false);
  }

  return (
    <>
      {/* Render CartDetails component when showCart is true */}
      {showCart && <CartDetails handleCartDetailsClose={handleCartDetailsClose} />}

      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          
          {/* Logo */}
          <a href="index.html">
            <img src={Logo} width="139" height="26" alt="Logo" />
          </a>

          {/* Navigation Icons */}
          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={Ring} width="24" height="24" alt="Notifications" />
              </a>
            </li>
            <li>
              <a
                onClick={() => setDarkMode(!darkMode)}
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={darkMode? Sun: Moon} width="24" height="24" alt="Dark Mode" />
              </a>
            </li>
            <li>
              <a
                onClick={() => setShowCart(true)}
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={Cart} width="24" height="24" alt="Cart" />
                {
                  cartData.length > 0 && (
                    <span className="bedge text-green font-bold text-sm">{cartData.length}</span>
                  )
                }
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
