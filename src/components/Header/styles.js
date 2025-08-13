import { styled, css } from "styled-components";

export const Header = styled.header`
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.color.primaryDark};
    background: ${({ theme }) => theme.color.backgroundNormal};
    padding: 1rem;
    position: fixed;
`;

export const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1080px;
    margin: 0 auto;
    z-index: 100;
`;

export const Logo = styled.img`
    max-width: 14rem;
`;

export const BrandNav = styled.a`
    z-index: 100;
`;

export const Menu = styled.ul`
    display: flex;
    gap: 1rem;
    list-style: none;

    @media(max-width: 768px){
        display: ${({ open }) => open ? "flex" : "none"};
        flex-direction: column;
        position: absolute;
        gap: 5rem;
        top: 1rem;
        left: 0;   
        width: 100%;
        height: 100dvh;
        align-items: center;
        justify-content: center;
        background: ${({ theme }) => theme.color.backgroundNormal};
        z-index: 10;

    }
`;

export const MenuItem = styled.li`

`;

export const linkItem = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.color.primaryNormal};
    font-size: 1.1rem;
    transition: all .2s ease-in-out;

    &:hover{
        color: ${({ theme }) => theme.color.primaryLight};
        border-bottom: 1px solid ${({ theme }) => theme.color.primaryLight}; 
    }

    @media(max-width: 768px){
        font-size: 1.5rem;
    }
`;

export const hamburguer = styled.div`
    display: none;
    cursor: pointer;
    transition: all .2s ease-in-out;

    @media(max-width: 768px){
        display: block;
        z-index: 100;
    }
`;