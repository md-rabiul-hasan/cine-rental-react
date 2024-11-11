import React, { useState } from 'react';
import Moon from './assets/icons/moon.svg';
import Logo from './assets/logo.svg';
import Ring from './assets/ring.svg';
import Cart from './assets/shopping-cart.svg';
import CartDetails from './movie/CartDetails';

export default function Header() {
  const [showCart, setShowCart] = useState(false);

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
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={Moon} width="24" height="24" alt="Dark Mode" />
              </a>
            </li>
            <li>
              <a
                onClick={() => setShowCart(true)}
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={Cart} width="24" height="24" alt="Cart" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
