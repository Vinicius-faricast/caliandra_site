import * as S from "./styles"
import HistoryImg from "../../assets/image_history.svg";
import { SectionDefault } from "../HistorySection/SectionDefault";
export const ContactSection = ({children}) => {
    
    return (
        <S.SectionBody>
            <SectionDefault src={HistoryImg} title={"Contate-nos"} description={children}>
                <button>Entrar em contato</button>
            </SectionDefault>
        </S.SectionBody>
    )
}