import * as S from "./styles.js";

export const ItemPrice = ({ title, price, children }) => {
    return (
        <S.ItemPrice>
            <S.ItemContainer>
                <S.ItemTitle>{title}</S.ItemTitle>
                <S.lineItem></S.lineItem>
                <S.ItemPriceValue>R$ {price}</S.ItemPriceValue>
            </S.ItemContainer>
            {children &&
                <S.ItemDescription>{children}</S.ItemDescription>
            }
        </S.ItemPrice>
    )
}