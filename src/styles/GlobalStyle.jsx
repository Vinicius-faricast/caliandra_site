import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
        
    html{
        scroll-behavior: smooth;
    }

    *{
        font-family: "Abhaya Libre", serif;
        font-optical-sizing: auto;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        width: 100%;
        background: ${({ theme })=> theme.color.backgroundNormal};
    }
`;