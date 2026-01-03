import { ContactButton } from "../../ContactButton/ContactButton.jsx";
import * as S from "./styles.js";
export const ItemPromotion = () => {
    return (
        <S.SectionPromotion>
            <S.ItemPromotion>
                <S.ItemPromotionTitle>Conheça nossos promocionais</S.ItemPromotionTitle>
                <S.ItemPromotionText>Pé e mão apenas R$ 00.00</S.ItemPromotionText>
            </S.ItemPromotion>
            <S.BtnPromotionContainer>
                <S.BtnPromotion href="#agendamento">Agende seu horário!</S.BtnPromotion>
            </S.BtnPromotionContainer>
        </S.SectionPromotion>
    )
}