import ConsideracoesFinais from "../../Components/ConsideracoesFinais/ConsideracoesFinais";
import Rodape from "../PaginaPadrao/Rodape/Rodape";
import CapaSobreNos from "./CapaSobreNos/CapaSobreNos";
import Destaques from "./Destaques/Destaques";
import style from "./SobreNos.module.css";

const SobreNos = () => {
    return(
        <>
            <section className={style.sectionCapaSobreNos}>
                <CapaSobreNos />
            </section>
            <section  className={style.sectionDestaquesSobreNos}>
                <Destaques />
            </section>
            <section>
                <ConsideracoesFinais />
            </section>
            <section>
                <Rodape />
            </section>
        </>
    )
}

export default SobreNos;
