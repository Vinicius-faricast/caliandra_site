import styled from "styled-components";

export const FooterSection =styled.footer`
    width: 100%;
    background: ${({ theme }) => theme.color.backgroundDark};
    
`;

export const FooterContainer = styled.div`
    max-width: 1080px;
    padding: 1.5rem 0;
    margin: 0 auto;
    display:flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px){
        width: 100%;
        flex-direction: column;
        gap: 1rem;
    }
`;

export const FooterImg = styled.img`
    max-width: 30%;

    @media screen and (max-width: 768px){
        max-width: 100%;
    }
`;

export const FooterContent = styled.div`
    max-width: 25%;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    align-items: center;

    @media screen and (max-width: 768px){
        max-width: 90%;
    }

`;

export const FooterText = styled.p`
    color: ${({ theme }) => theme.color.primaryNormal};
    font-size: 1rem;
    text-align: center;
`;

export const FooterTitle = styled.h3`
    color: ${({ theme }) => theme.color.primaryNormal};
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    gap: .5rem;
`;

export const FooterLink = styled.a`
    text-decoration: none;
    display: inline-flex;
    color: ${({ theme }) => theme.color.primaryNormal};
    transition: all .2s ease-in-out;

    &:hover{
        color: ${({ theme }) => theme.color.primaryLight};
        scale: 1.1;
    }
`;