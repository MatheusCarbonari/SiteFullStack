import Conteudo from "../../../Components/ConteudoSQ/ConteudoSQ";
import style from "./SobreQualidade.module.css";

// container principal da seção de qualidade
const SobreQualidade = () => {
    return(
        // section para englobar todos os componentes
        <section className={style.containerSectionSobreQualidade}>
            {/* unico conteudo da section, já direciona para os componentes */}
            <Conteudo/>
        </section>
    )
}

export default SobreQualidade;
