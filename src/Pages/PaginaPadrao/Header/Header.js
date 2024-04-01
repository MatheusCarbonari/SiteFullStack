import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import { useEffect, useState } from "react";

const Header = () => {

    // Salva o tamanho da tela atual
    const [tamanhoTela, setTamanhoTela] = useState({
        largura: window.innerWidth,
        altura: window.innerHeight
    });

    // usado para capturar os eventos de mudança de tela
    useEffect(() => {

        // atualiza o tamanho da tela de acordo com o useEffect
        const atualizarTamanhoTela = () => {
            setTamanhoTela({
                largura: window.innerWidth,
                altura: window.innerHeight
            });
        };

        // adiciona o evento para ouvir a mudança
        window.addEventListener('resize', atualizarTamanhoTela);

        // retira o evento de ouvir a mudança
        return () => {
            window.removeEventListener('resize', atualizarTamanhoTela);
        };

    }, [])

    // if ternario para salvar, de acordo com o tamnho da tela, se vai ser usada a palavra completa ou não
    const mudarMenuSobre = tamanhoTela.largura <= 450 ? "Sobre" : "Sobre Nós"

    return(
        <header className={style.headerContainer}>

            {/* Logo */}
            <div className={style.divLogo}>
                <p>Boi Arte</p>
                <p className={style.Elogo}>&</p>
                <p className={style.ciaLogo}>Cia</p>
            </div>

            {/* Input de pesquisa */}
            <div className={style.inputDePesquisa}>
                <input className={style.campoDePesquisa} type="search" placeholder="Digite o produto" />
                <input className={style.botaoDePesquisa} type="submit" value="Buscar" />
            </div>

            {/* Menu de opções */}
            <div className={style.containerMenu}>
                <ul className={style.listaMenu}>
                    <li>
                        <NavLink
                            className={style.navLinkMenu}
                            to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={style.navLinkMenu}
                            to="/sobrenos">
                            {mudarMenuSobre}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={style.navLinkMenu}
                            to="">
                            Cardapio
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
