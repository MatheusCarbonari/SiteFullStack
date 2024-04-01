import style from "./Rodape.module.css";

const Rodape = () => {
    return(
        <footer className={style.footerContainer}>
            <p className={style.footerText}>&copy; Projeto Desenvolvido por Matheus Carbonari | Projeto sem fins lucrativos</p>
        </footer>
    )
}

export default Rodape;
