import { createGlobalStyle } from "styled-components";
import Background from '../img/background.jpg'


const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Montserrat', sans-serif;
    overflow: hidden;    
    background-size: cover;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${Background});
    background-size: cover;
}`;

export default GlobalStyle;