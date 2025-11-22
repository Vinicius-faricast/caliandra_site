import * as S from "./styles.js";
import HistoryImg from "../../assets/image_history.svg";
export const HistorySection = () => {
    return (
        <S.sectionBody id="sobre">
            <S.SectionContainer >
                <S.SectionImage src={HistoryImg} alt="" />
                <S.ContantContainer >
                    <S.SectionTitle >Conheça nossa história</S.SectionTitle>
                    <S.SectionDescription>
                        Lorem ipsum dolor sit amet consectetur. Sit quis nunc massa velit. A sed massa adipiscing pulvinar bibendum libero. Sed ultricies pulvinar pharetra hac purus. At convallis cursus sagittis maecenas non amet lorem ac.Lorem ipsum dolor sit amet consectetur. Sit quis nunc massa velit. A sed massa adipiscing pulvinar bibendum libero. Sed ultricies pulvinar pharetra hac purus. At convallis cursus sagittis maecenas non amet lorem ac.
                    </S.SectionDescription>
                </S.ContantContainer>
            </S.SectionContainer>
        </S.sectionBody>
    );
}