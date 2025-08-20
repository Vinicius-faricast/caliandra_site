import {styled} from "styled-components";

export const sectionBody = styled.section`
    width: 100%;
    padding: 4rem 0;
    background: ${({ theme }) => theme.color.backgroundDark};
`;

export const SectionContainer = styled.div`
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

export const SectionImage = styled.img`
    max-width: 40%;

    @media screen and (max-width: 768px){
        max-width: 90%;
    }
`;

export const ContantContainer = styled.div`
    max-width: 40%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: self-start;

    @media screen and (max-width: 768px){
        max-width: 90%;
    }
`;

export const SectionTitle = styled.h2`
    font-size: 2rem;
    color: ${({ theme }) => theme.color.primaryNormal};
    text-align: center;
`;

export const SectionDescription = styled.p`
    font-size: 1.2rem;
    text-align: justify;
`;