import * as S from "./styles.js";
import PriceImg from "../../assets/image_prices.svg";
import detail_price from "../../assets/detail_price.svg";
export const PriceSection = () => {
    return (
        <S.SectionBody bg={detail_price} id="servicos">
            <S.SectionContainer>
                <S.PricesContainer>
                    <S.SectionTitle >Serviços</S.SectionTitle>
                    <S.PriceList>
                        <li>Mão..........................R$24</li>
                        <li>Mão..........................R$24</li>
                        <li>Mão..........................R$24</li>
                        <li>Mão..........................R$24</li>
                        <li>Mão..........................R$24</li>
                    </S.PriceList>
                    <S.PriceList>
                        <li>Mão..........................R$24</li>
                        <li>Mão..........................R$24</li>
                        <li>Mão..........................R$24</li>
                    </S.PriceList>
                </S.PricesContainer>
                <S.SectionImage src={PriceImg} alt="" />
            </S.SectionContainer>
        </S.SectionBody>
    )
}