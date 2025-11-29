import * as S from "./styles.js"
export const ContactButton = ({children, href}) => {
    return(
        <S.ContactButton >
            <S.linkButton className="btnWhatsapp" href={href}>{children}</S.linkButton>
        </S.ContactButton>
    )
}