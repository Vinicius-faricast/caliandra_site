import { styled } from "styled-components";

export const ItemPrice = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: start;
    gap: .5rem;
    color: ${({ theme }) => theme.color.font60};   
`;

export const ItemContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: end;
    gap: .5rem;
`;

export const ItemTitle = styled.h3`
    min-width: fit-content;
    line-height: 0.5;
    font-size: 1.2rem;
    text-transform: uppercase;
`;

export const ItemPriceValue = styled.h2`
    min-width: fit-content;
    line-height: 0.5;
    font-size: 1.2rem;
`;

export const lineItem = styled.div`
    width: 100%;
    max-width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.color.font60};
`;

export const ItemDescription = styled.p`
    font-size: .8rem;
    /* width: 40%; */
    line-height: 1.2rem;
`;