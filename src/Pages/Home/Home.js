import Capa from "../../Components/Capa/Capa";
import style from "./Home.module.css";
import Produtos from "./Produtos/Produtos";
import SobreQualidade from "./SobreQualidade/SobreQualidade";
import Rodape from "../PaginaPadrao/Rodape/Rodape"
import ConsideracoesFinais from "../../Components/ConsideracoesFinais/ConsideracoesFinais";

// Página home do site
const Home = () => {
    return(
        // Engloba todo o conteudo(sections) do site
        <section className={style.sectionHome}>
            {/* (div para consertar um erro) contain a capa do site */}
            <div className={style.divContainerCapa}>
                <Capa />
            </div>
            <SobreQualidade />
            <div className={style.divProdutos}>
                <Produtos />
            </div>
            <div>
                <ConsideracoesFinais />
            </div>
            <div>
                <Rodape />
            </div>
        </section>
    )
}

export default Home;
