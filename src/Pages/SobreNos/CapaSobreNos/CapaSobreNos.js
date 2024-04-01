import style from "./CapaSobreNos.module.css";

const CapaSobreNos = () => {

    // Salva o numero de telefone
    const numeroDeTelefone = "5511945262200";

    // função que redireciona para a conversa do whats
    // função chamada após o link ser clicado
    const aoClicarNoLinkDetelefone = () => {
        const url = `https://wa.me/${numeroDeTelefone}`;
        window.open(url, '_blank');
    };

    return(
        // capa principal da página sobre nós, com imagem de fundo e um texto de descrição
        <div className={style.divContainerCapaSobreNos}>
            <div className={style.divContainerConteudo}>
                <div className={style.divContainerTexto}>
                    <h2>Tradição: 25 Anos de Excelência no Nosso Açougue</h2>
                    <p>Com mais de 25 anos de dedicação ao ramo, nosso açougue orgulha-se de uma sólida experiência, proporcionando cortes de carne de qualidade e atendimento excepcional aos nossos clientes.</p>
                </div>
                <div className={style.divContainerBotao}>
                    <button onClick={aoClicarNoLinkDetelefone}>
                        Faça já o seu pedido
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CapaSobreNos;
