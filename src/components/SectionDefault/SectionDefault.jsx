import * as S from "./styles.js";

export const SectionDefault = ({src, title, description, children}) => {
    
    return (
    <S.SectionContainer >
        <S.SectionImage src={src} alt="" />
        <S.ContantContainer >
            <S.SectionTitle >{title}</S.SectionTitle>
            <S.SectionDescription>
                {description}
            </S.SectionDescription>
                {children && children}
        </S.ContantContainer>
    </S.SectionContainer>
)};