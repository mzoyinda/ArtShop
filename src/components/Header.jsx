import Link from "next/link";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { HeaderContainer } from "@/assets/styles";

const Header = ({ darkmode }) => {
  return (
    <HeaderContainer>
      <div className="desktop">
        <Link href="/" className="logo">
          Art.shop
        </Link>

        <nav className="nav__links">
          <Link smooth href="/#collections" className="collection">
            Collections
          </Link>
          <Link smooth href="/cart" className="products">
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
