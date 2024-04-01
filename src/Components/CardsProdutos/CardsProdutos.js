import style from "./CardsProdutos.module.css";

// forma os cards que serão usados para mostrar os produtos
// recebe os dados de Produtos.js
const CardsProdutos = ({nome, descricao, img}) => {
    return(
        <div className={style.containerCardProduto}>
            <div className={style.divImagemCardProduto}>
                <img src={img} alt={`Imagem ${nome}`}/>
            </div>
            <div className={style.descricaoCardProduto}>
                <h3>{nome}</h3>
                <p>{descricao}</p>
            </div>
        </div>
    )
}

export default CardsProdutos;
