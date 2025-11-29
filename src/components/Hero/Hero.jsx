
import * as S from "./styles.js"
import HeroImg from "../../assets/image_hero.svg"
import { ContactButton } from "../ContactButton/ContactButton.jsx"
export const Hero = () =>{
    return(
        <S.HeroContainer id="home">
            <S.HeroContent>
                <S.HeroTitle>Lorem ipsum dolor sit amet Lorem ipsum</S.HeroTitle>
                <S.HeroDescription>Lorem ipsum dolor sit amet consectetur. Sit quis nunc massa velit. A sed massa adipiscing pulvinar bibendum libero. Sed ultricies pulvinar pharetra hac purus. At convallis cursus sagittis maecenas non amet lorem ac.</S.HeroDescription>
                <ContactButton href="#agendamento">Agende seu horário!</ContactButton>
            </S.HeroContent>
            <S.HeroImage src={HeroImg} alt="" />
        </S.HeroContainer>
    )
}