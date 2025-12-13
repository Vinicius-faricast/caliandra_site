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
    border: 1px solid red
`;

export const FooterImg = styled.img`
    max-width: 30%;

    @media screen and (max-width: 768px){
        max-width: 90%;
    }
`;

export const FooterContent = styled.div`
    max-width: 25%;
    display: flex;
    flex-direction: column;
    /* gap: 1rem; */
    align-items: center;
    border: 1px solid red;
`;

export const FooterText = styled.p`
    color: ${({ theme }) => theme.color.primaryNormal};
    font-size: 1rem;
    text-align: center;
`;

export const FooterTitle = styled.h3`
    color: ${({ theme }) => theme.color.primaryNormal};
`;

export const FooterLink = styled.a`
    text-decoration: none;
    border: 1px solid red;
    display: inline-flex;
    color: ${({ theme }) => theme.color.primaryNormal};
`;