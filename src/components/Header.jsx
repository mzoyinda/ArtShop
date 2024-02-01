import Link from "next/link";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { HeaderContainer } from "@/assets/styles";
import { useSelector } from "react-redux";

const Header = ({ darkmode }) => {

  const {cartItems } = useSelector((state) => state.cart)

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
          <span className="cart-badge">
            {cartItems.length === 0 ? '' : cartItems.reduce((a, c) => a + c.qty, 0)}
          </span>
          <Link href="/cart" className="products">
            Cart
          </Link>
        {darkmode ? (
          <button onClick={darkmode.toggle}>
            {darkmode.value ? <FaMoon /> : <FaSun />}
          </button>
        ) : (
          <button>
            <FaSun />
          </button>
        )}
        </nav>
      </div>
    </HeaderContainer>
  );
};

export default Header;
