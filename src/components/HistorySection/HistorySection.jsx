import * as S from "./styles.js";
import HistoryImg from "../../assets/image_history.svg";
import { SectionDefault } from "../SectionDefault/SectionDefault.jsx";
export const HistorySection = ({children}) => {
    return (
        <S.sectionBody id="sobre">
            <SectionDefault src={HistoryImg} title={"Conheça nossa história"} description={children} />
        </S.sectionBody>
    );
}