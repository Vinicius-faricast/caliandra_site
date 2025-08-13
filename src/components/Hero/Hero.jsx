
import * as S from "./styles.js"
import HeroImg from "../../assets/image_hero.svg"
export const Hero = () =>{
    return(
        <S.HeroContainer>
            <S.HeroContent>
                <S.HeroTitle>Lorem ipsum dolor sit amet Lorem ipsum</S.HeroTitle>
                <S.HeroDescription>Lorem ipsum dolor sit amet consectetur. Sit quis nunc massa velit. A sed massa adipiscing pulvinar bibendum libero. Sed ultricies pulvinar pharetra hac purus. At convallis cursus sagittis maecenas non amet lorem ac.</S.HeroDescription>
                <S.HeroButton className="btnWhatsapp">Agende seu horário!</S.HeroButton>
            </S.HeroContent>
            <S.HeroImage src={HeroImg} alt="" />
        </S.HeroContainer>
    )
}