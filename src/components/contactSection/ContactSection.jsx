import * as S from "./styles"
import HistoryImg from "../../assets/image_history.svg";
import { SectionDefault } from "../SectionDefault/SectionDefault";
import { ContactButton } from "../ContactButton/ContactButton";
export const ContactSection = ({children}) => {
    
    return (
        <S.SectionBody id="contato">
            <SectionDefault src={HistoryImg} title={"Contate-nos"} description={children}>
                <ContactButton href="#whatsapp">Entrar em contato</ContactButton>
            </SectionDefault>
        </S.SectionBody>
    )
}