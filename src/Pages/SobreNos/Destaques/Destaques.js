import style from "./Destaques.module.css";
import carneAssada from "./img/assado.png";
import carneFresca from "./img/carneFresca.jpg";
import carneFresca2 from "./img/carneFresca2.jpg";


// cria os destaques da pagina e os fundos
// está na pigina sobre nós
const Destaques = () => {
    return(
        <div className={style.divContainerDivisao}>

            {/* não vai dar certo desse jeito, vai ser necessario deixar os containers de conteudo
            acima das divs de pano de fundo. Talves com position absolute. */}
            <div className={style.divContainerConteudo}>

                <div className={style.divContainerCarneAssada}>
                    <div className={style.divContainerCarneAssadaTexto}>
                        <h2>Os Melhores Assados da Região</h2>
                        <p>Desfrute do sabor irresistível das nossas carnes assadas, cuidadosamente preparadas para proporcionar uma explosão de sabores suculentos e texturas perfeitamente grelhadas. Uma experiência gastronômica que transforma cada mordida em um deleite inesquecível.</p>
                    </div>
                    <img src={carneAssada} alt="Carne assada"/>
                </div>

                <div className={style.divContainerCarneFresca}>
                    <img src={carneFresca} alt="Carne Fresca"/>
                    <div className={style.divContainerCarneFrescaTexto}>
                        <p>Com um quarto de século de compromisso, nossa tradição no universo da carne reflete-se na confiança que nossos clientes depositam em nós, garantindo que cada visita ao nosso açougue seja uma experiência de qualidade inigualável.</p>
                    </div>
                </div>

                <div className={style.divContainerCarneFresca}>
                    <img src={carneFresca2} alt="Carne Fresca"/>
                    <div className={style.divContainerCarneFrescaTexto}>
                        <p>Com um quarto de século de compromisso, nossa tradição no universo da carne reflete-se na confiança que nossos clientes depositam em nós, garantindo que cada visita ao nosso açougue seja uma experiência de qualidade inigualável.</p>
                    </div>
                </div>
                

            </div>

        </div>
    )
}

export default Destaques;
