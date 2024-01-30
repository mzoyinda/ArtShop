import { createGlobalStyle} from "styled-components"

export const lightTheme = {
  body: '#FFF',
  text: '#201D46',
  link: "#30295E",
  toggleBorder: '#FFF',
  background: '#363537',
}

export const darkTheme = {
  body: '#21212B',
  text: '#FAFAFA',
  link: "#FAFAFA",
  toggleBorder: '#6B8096',
  background: '#999',
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
}
button,a{
  color: ${({ theme }) => theme.link};
}
header{
    background: ${({ theme }) => theme.body};
}
`