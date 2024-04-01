import TextoCapaHome from "../TextoCapaHome/TextoCapaHome";
import style from "./Capa.module.css";

const Capa = () => {
    return(
        // capa principal da página home, com imagem de fundo e dois textos com botões
        <div className={style.divContainerCapa}>
            <TextoCapaHome />
            <TextoCapaHome lado="direita"/>
        </div>
    )
}

export default Capa;
