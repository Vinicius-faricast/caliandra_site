import {styled} from "styled-components";

export const SectionBody = styled.section`
    width: 100%;
    background-image: url(${({ bg }) => bg});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    padding: 8rem 0;
`;

export const SectionContainer = styled.div`
    max-width: 1080px;
    margin: 0 auto;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 3rem;
`;

export const PricesContainer = styled.div`
    /* border: 1px solid red; */
`;

export const SectionTitle = styled.h2`
    font-size: 2rem;
    color: ${({ theme }) => theme.color.primaryNormal};
`;

export const PriceList = styled.ul`
    list-style: none;

`;

export const SectionImage = styled.img`
    max-width: 25%;
`;

export const SectionImageDetail = styled.img`
    max-height: 25rem;
`;