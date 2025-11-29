import * as S from "./styles.js"
import brandLogo from "../../assets/logo_nav.png"
import { TfiAlignRight, TfiClose } from "react-icons/tfi";
import { useState } from "react";
import { ContactButton } from "../ContactButton/ContactButton.jsx";

export const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <S.Header>
            <S.NavBar>
                <S.BrandNav href="#home">
                    <S.Logo src={brandLogo} />
                </S.BrandNav>
                <S.hamburguer onClick={() => setOpen(!open)}>
                    {open ? <TfiClose size={30} color="#C6364D" /> : <TfiAlignRight size={30} color="#C6364D" />}
                </S.hamburguer>
                <S.Menu open={open}>
                    <S.MenuItem><S.linkItem onClick={() => setOpen(!open)} href="#sobre">Sobre</S.linkItem></S.MenuItem>
                    <S.MenuItem><S.linkItem onClick={() => setOpen(!open)} href="#servicos">Serviços</S.linkItem></S.MenuItem>
                    <S.MenuItem><S.linkItem onClick={() => setOpen(!open)} href="#contato">Contato</S.linkItem></S.MenuItem>
                    <S.MenuItem>
                        <ContactButton href="entre em contato">Entrar em contato</ContactButton>
                    </S.MenuItem>
                </S.Menu>
            </S.NavBar>
        </S.Header>
    )
}