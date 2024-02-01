"use client";
import React from "react";
import useDarkMode from "use-dark-mode";

import Header from "./Header";
import Footer from "./Footer";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../themeConfig";
import { HomeContainer, Wrapper } from "@/assets/styles";

const App = ({ children }) => {
  const darkmode = useDarkMode(false);
  const theme = darkmode.value ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <HomeContainer>
        <Header darkmode={darkmode} />
        <main darkmode={darkmode}>{children}</main>
        <Footer darkmode={darkmode} />
        </HomeContainer>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
