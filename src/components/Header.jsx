import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { FaMoon, FaSun } from "react-icons/fa";
import { Button, HeaderContainer, NavLink } from "@/assets/styles";

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
          <Link smooth href="/#about" className="products">
            Cart
          </Link>
        {darkmode ? (
          <button onClick={darkmode.toggle}>
            {darkmode.value ? <FaMoon /> : <FaSun />}
          </button>
        ) : (
          <Button onClick={darkmode.toggle}>
            <FaSun />
          </Button>
        )}
        </nav>
      </div>
    </HeaderContainer>
  );
};

export default Header;
