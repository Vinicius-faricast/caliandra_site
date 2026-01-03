import * as S from "./styles.js";
import PriceImg from "../../assets/image_prices.svg";
import detail_price from "../../assets/detail_price.svg";
import { ItemPrice } from "./ItemPrice/ItemPrice.jsx";
import { ItemPromotion } from "./ItemPromotion/ItemPromotion.jsx";
export const PriceSection = () => {
    const listPrices = [
        {
            "index": 1,
            "title": "Mão",
            "price": 24,
            "description": "",
            "specialService": false
        },
        {
            "index": 2,
            "title": "Pé",
            "price": 30,
            "description": "",
            "specialService": false
        },
        {
            "index": 3,
            "title": "Pé e mão",
            "price": 50,
            "description": "",
            "specialService": false
        },
        {
            "index": 4,
            "title": "Esmaltação",
            "price": 14,
            "description": "",
            "specialService": false
        },
        {
            "index": 5,
            "title": "Spa para os pés",
            "price": 42,
            "description": "ESFOLIAÇÃO, HIDRATAÇÃO, MASSAGEM, RELAXAMENTO, CUTILAÇÃO E ESMALTAÇÃO",
            "specialService": false
        },
        {
            "index": 6,
            "title": "Alongamento Acrílico",
            "price": 100,
            "description": "COLOCAÇÃO DO ALONGAMENTO ACRÍLICO. INCLUSO CUTILAÇÃO E ESMALTAÇÃO",
            "specialService": true
        },
        {
            "index": 7,
            "title": "Manutenção",
            "price": 50,
            "description": "",
            "specialService": true
        },
        {
            "index": 8,
            "title": "Remoção do alongamento",
            "price": 30,
            "description": "",
            "specialService": true
        },


    ];


    return (
        <S.SectionBody bg={detail_price} id="servicos">
            <S.SectionContainer>
                <S.PricesContainer>
                    <S.SectionTitle >Serviços</S.SectionTitle>
                    <S.PriceList>
                        {listPrices.filter(item => !item.specialService).map((item, index) => <ItemPrice key={index} title={item.title} price={item.price}>{item.description}</ItemPrice>)}
                    </S.PriceList>
                    <S.PriceList>
                        {listPrices.filter(item => item.specialService).map((item, index) => <ItemPrice key={index} title={item.title} price={item.price}>{item.description}</ItemPrice>)}
                    </S.PriceList>
                </S.PricesContainer>
                <S.SectionImageDetail>
                    <S.SectionImage src={PriceImg} alt="" />
                </S.SectionImageDetail>
            </S.SectionContainer>
            <ItemPromotion />
        </S.SectionBody>
    )
}