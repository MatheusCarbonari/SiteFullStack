import style from "./TextoCapaHome.module.css";

const TextoPadrao = ({lado}) => {

    // const para testar e salvar se é verdadeira a opção de acrescentar uma classe ao componente
    const classeOpcional = lado === "direita" ? style.mandarDireita : ""

    return(
            // div container, com uma classe opcional
            <div className={
                `${style.containerTextoPadrao}
                ${classeOpcional}
                `
            }>
                {/* '// texto padrão' */}
                <p className={style.textoPadrao}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper erat eu enim, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                {/* '// botão padrão' */}
                <button className={style.botaoTextoPadrao}>
                    Contato
                </button>

            </div>
    )
}

export default TextoPadrao;