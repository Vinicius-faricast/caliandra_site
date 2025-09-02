import {styled} from "styled-components";

export const SectionBody = styled.section`
    width: 100%;
    background-image: url(${({ bg }) => bg});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    padding: 8rem 0;

    @media screen and (max-width: 768px){
        background-image: none;
        padding: 10rem 2rem;
    }
`;

export const SectionContainer = styled.div`
    max-width: 1080px;
    margin: 0 auto;
    display:flex;
    justify-content: space-around;
    align-items: center;
    gap: 3rem;

    @media screen and (max-width: 768px){
        width: 100%;
    }
`;

export const PricesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: fit-content;


    
`;

export const SectionTitle = styled.h2`
    font-size: 2rem;
    color: ${({ theme }) => theme.color.primaryNormal};
`;

export const PriceList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 2rem;
`;

export const SectionImage = styled.img`
    max-width: 30%;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const SectionImageDetail = styled.img`
    max-height: 25rem;
    
`;