import * as S from "./styles.js"
import brandLogo from "../../assets/logo_nav.png"

export const Header = () => {
    return (
        <S.Header>
            <S.NavBar>
                <S.BrandNav href="#home">
                    <S.Logo src={brandLogo} />
                </S.BrandNav>
                <S.Menu>
                    <S.MenuItem><S.linkItem href="#sobre">Sobre</S.linkItem></S.MenuItem>
                    <S.MenuItem><S.linkItem href="#servicos">Serviços</S.linkItem></S.MenuItem>
                    <S.MenuItem><S.linkItem href="#contato">Contato</S.linkItem></S.MenuItem>
                    <S.MenuItem><S.linkItem className="btnWhatsapp" href="#agendamento">Agende seu Horario!</S.linkItem></S.MenuItem>
                </S.Menu>
            </S.NavBar>
        </S.Header>
    )
}