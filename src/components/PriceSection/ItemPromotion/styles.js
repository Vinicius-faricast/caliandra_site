import {styled} from "styled-components";


export const SectionPromotion = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem 0;
    justify-content: space-around;
    width: 1080px;
    max-width: 960px;
    background-color: ${({ theme }) => theme.color.primaryNormal};
    margin: 0 auto;

    @media screen and (max-width: 768px){
        flex-direction: column;
        gap: 2rem;
        min-width: 100%;
        max-width: 100%;
    }
`;

export const ItemPromotion = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.color.secondaryLight};
`;

export const ItemPromotionTitle = styled.h3`
    min-width: fit-content;
    line-height: 0.5;
    font-size: 1.8rem;
    text-transform: uppercase;

    @media(max-width: 768px){
        font-size: 2rem;
        text-align: center;
        line-height: 1.2;
    }
`;

export const ItemPromotionText = styled.p`
    min-width: fit-content;
    line-height: 0.5;
    font-size: 1.8rem;
`;

export const BtnPromotionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    align-items: center;
    justify-content: center;
`;

export const BtnPromotion = styled.a`
    text-decoration: none;
    padding: 1.5rem 2.5rem;
    color: ${({ theme }) => theme.color.secondaryLight};
    font-size: 1.1rem;
    transition: all .2s ease-in-out;
    border: 1px solid ${({ theme }) => theme.color.secondaryLight};

    @media(max-width: 768px){
        font-size: 1.5rem;
    }

    &:hover{
        background: ${({ theme }) => theme.color.secondaryLight};
        color: ${({ theme }) => theme.color.primaryNormal};
        scale: 1.1;
    }
`;