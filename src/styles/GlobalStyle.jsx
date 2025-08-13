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

    .btnWhatsapp{
        border: 1px solid ${({ theme }) => theme.color.primaryNormal};
        background: none;
        font-size: 1.1rem;
        cursor: pointer;
        padding: .5rem 1rem;
        color: ${({ theme }) => theme.color.primaryNormal};
        transition: all .2s ease-in-out;

        &:hover{
            background: ${({ theme }) => theme.color.primaryNormal};
            color: ${({ theme }) => theme.color.font0};
        }
    }
`;