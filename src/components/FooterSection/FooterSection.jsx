import * as S from "./styles";
import brandLogo from "../../assets/logo_nav.png"
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";

export const FooterSection = () => {

    return (
        <S.FooterSection>
            <S.FooterContainer>
                <S.FooterImg src={brandLogo}/>
                <S.FooterContent>
                    <S.FooterTitle>Redes Sociais</S.FooterTitle>
                    <S.FooterLinksContainer>
                        <S.FooterLink href="#" target="_blank"><AiOutlineFacebook size={30}/></S.FooterLink>
                        <S.FooterLink href="https://www.instagram.com/caliandra.esmalteria/" target="_blank"><AiOutlineInstagram size={30}/></S.FooterLink>
                    </S.FooterLinksContainer>
                </S.FooterContent>
                <S.FooterContent>
                    <S.FooterTitle>Endereço</S.FooterTitle>
                    <S.FooterText>Rua Délcio Ferreira de Azevedo, 656
                        Jardim Piazza di Roma , Sorocaba - SP</S.FooterText>
                    <S.FooterText>Telefone: (15) 98820-6804</S.FooterText>
                </S.FooterContent>
            </S.FooterContainer>
        </S.FooterSection>
    )
}