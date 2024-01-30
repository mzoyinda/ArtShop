"use client";
import React from "react";
import useDarkMode from "use-dark-mode";

import Header from "./Header";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../themeConfig";
import { HomeContainer, Wrapper } from "@/assets/styles";

const App = ({ children }) => {
  const darkmode = useDarkMode(true);
  const theme = darkmode.value ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <HomeContainer>
        <Header darkmode={darkmode} />
        <main darkmode={darkmode}>{children}</main>
        </HomeContainer>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
