import { styled, css } from "styled-components";

export const Header = styled.header`
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.color.primaryDark};
    padding-block: 1rem;
`;

export const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1080px;
    margin: 0 auto;
`;

export const Logo = styled.img`
    max-width: 14rem;
`;

export const BrandNav = styled.a`

`;

export const Menu = styled.ul`
    display: flex;
    gap: 1rem;
    list-style: none;
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


    ${props => props.className === "btnWhatsapp" && css`
        border: 1px solid ${({ theme }) => theme.color.primaryNormal};
        background: none;
        cursor: pointer;
        padding: .5rem 1rem;

        &:hover{
            background: ${({ theme }) => theme.color.primaryNormal};
            color: ${({ theme }) => theme.color.font0};
        }
    `}

`;