import CardsProdutos from "../../../Components/CardsProdutos/CardsProdutos";
import style from "./Produtos.module.css";
import imagem1 from "./img/carnes2.jpg";
import imagem2 from "./img/carnes3.jpg";
import imagem3 from "./img/carnes4.jpg";

const Produtos = () => {
    return(
        <div className={style.divCards}>
            {/* chama o componente que monta o card, e passa para ele as infoemções necessarias
            assim fica um card mais dinamico e reutilizavel */}
            <div>
                <CardsProdutos 
                    nome={"Contra Filé"}
                    descricao={
                        "O Contra Filé, corte nobre e suculento, é a escolha perfeita para os amantes de carne"
                    }
                    img={imagem1}
                />
            </div>
            <div>
                <CardsProdutos 
                    nome={"Picanha Bassi"}
                    descricao={
                        "A nobre Picanha Bassi destaca-se pela suculência e marmoreio único"
                    }
                    img={imagem2}
                />
            </div>
            <div>
                <CardsProdutos 
                    nome={"Alcatra"}
                    descricao={
                        "A Alcatra é uma escolha clássica para quem busca maciez e sabor refinado. Com textura suave e suculência inigualável"
                    }
                    img={imagem3}
                />
            </div>
            <div className={style.responsiveOut}>
                <CardsProdutos 
                    nome={"Ancho"}
                    descricao={
                        "O Ancho, conhecido por sua textura marmorizada e sabor robusto, é um corte que eleva a experiência gastronômica"
                    }
                    img={imagem1}
                />
            </div>
            <div className={style.responsiveOut}>
                <CardsProdutos 
                    nome={"Carré de Cordeiro"}
                    descricao={
                        "O Carré de Cordeiro, delicadamente temperado e preparado, oferece uma experiência única de carne de cordeiro"
                    }
                    img={imagem2}
                />
            </div>
            <div className={style.responsiveOut}>
                <CardsProdutos 
                    nome={"Contra Filé"}
                    descricao={
                        "O Contra Filé, corte nobre e suculento, é a escolha perfeita para os amantes de carne"
                    }
                    img={imagem3}
                />
            </div>
        </div>
    )
}

export default Produtos;
