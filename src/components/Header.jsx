"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { HeaderContainer } from "@/assets/styles";
import { useSelector } from "react-redux";

const Header = ({ darkmode }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const [count, setCount] = useState(0)

  useEffect(() => {
    const NewCount = cartItems.reduce((a, c) => a + c.qty, 0);
    setCount(NewCount)
  }, [cartItems])
  

  return (
    <HeaderContainer>
      <div className="desktop">
        <Link href="/" className="logo">
          Art.shop
        </Link>

        <nav className="nav__links">
          <Link href="/#collections" className="collection">
            Collections
          </Link>
          {!count ? "" : (
            <span className="cart-badge">{count}</span>
            )}
          <Link href="/cart" className="products">
            Cart
          </Link>
            <button onClick={darkmode.toggle}>
              {darkmode.value ? <FaMoon /> : <FaSun />}
            </button>
        </nav>
      </div>
    </HeaderContainer>
  );
};

export default Header;
