import style from "./ConteudoSQ.module.css";
import imagem from "./img/carnes1.jpg";

const Conteudo = () => {
    return(
        // container principal
        <div className={style.divContainerSobreQualidade}>
            {/* container de cima */}
            <div className={style.divPrimaria}>
                <img src={imagem} alt="Imagem de uma carne" className={style.imagemSobreQualidade}/>
                <article className={style.article}>
                    <h2>Lorem Ipsum</h2>
                    <p>Fusce id enim non lectus tristique cursus. Ut nec tellus a mauris convallis ultrices id vitae arcu.</p>
                    <p>Fusce id enim non lectus tristique cursus. Ut nec tellus a mauris convallis ultrices id vitae arcu.</p>
                </article>
            </div>
            {/* container de baixo */}
            <div className={style.divSecundaria}>
                <article>
                    <h2>Lorem Ipsum</h2>
                    <p>Proin accumsan arcu ut purus vulputate, et volutpat orci gravida. Suspendisse potenti.Nam condimentum sapien vel metus scelerisque, a hendrerit mi lacinia.Proin accumsan arcu ut purus vulputate, et volutpat orci gravida. Suspendisse potenti.Nam condimentum sapien vel metus scelerisque, a hendrerit mi lacinia.</p>
                </article>
                <article>
                    <h2>Lorem Ipsum</h2>
                    <p>Proin accumsan arcu ut purus vulputate, et volutpat orci gravida. Suspendisse potenti.Nam condimentum sapien vel metus scelerisque, a hendrerit mi lacinia.</p>
                </article>
            </div>
        </div>
    )
}

export default Conteudo;
