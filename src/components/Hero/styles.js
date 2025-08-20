import { styled } from "styled-components";

export const HeroContainer = styled.div`
    padding-top: 8rem;
    padding-bottom: 4rem;
    max-width: 1080px;
    margin: 0 auto;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 3rem;

    @media screen and (max-width: 768px){
        flex-direction: column-reverse;
    }
`;

export const HeroImage = styled.img`
    max-width: 45%;

    @media screen and (max-width: 768px){
        max-width: 90%;
    }
`;

export const HeroContent = styled.div`
    max-width: 40%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media screen and (max-width: 768px){
        max-width: 90%;
    }
`;

export const HeroTitle = styled.h1`
    font-size: 3rem;
    color: ${({ theme })=> theme.color.primaryNormal};
`;

export const HeroDescription = styled.p`
    font-size: 1.2rem;
    color: ${({ theme}) => theme.color.primaryDark};
`;

export const HeroButton = styled.button`
    width: fit-content;
    margin: 0 auto;
`;
