import * as S from "./styles.js";
import bg_image from "../../assets/bg_instagram_section.png";
import { FaInstagram } from "react-icons/fa";
export const InstagramSection = () => {
    return (
        <S.sectionBody id="instagram" bg={bg_image}>
            <S.SectionContainer>
                <S.SectionContent href="https://www.instagram.com/caliandra.esmalteria/" target="_blank">
                    <FaInstagram  size={30}/>
                    <S.SectionText>Siga-nos!</S.SectionText>
                </S.SectionContent>
            </S.SectionContainer>
        </S.sectionBody>
    )
}