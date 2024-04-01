import style from "./ConsideracoesFinais.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";

const ConsideracoesFinais = () => {

    // Salva o numero de telefone
    const numeroDeTelefone = "5511945262200";

    // função que redireciona para a conversa do whats
    // função chamada após o link ser clicado
    const aoClicarNoLinkDetelefone = () => {
        const url = `https://wa.me/${numeroDeTelefone}`;
        window.open(url, '_blank');
    };

    // função que redireciona para a localização após o link ser clicado
    const aoClicarLinkDeLocalizacao = () => {
        const url = "https://maps.app.goo.gl/dJEdQ8oiuNhH1yEk9";
        window.open(url, '_blank')
    }

    return(
        <div className={style.divContainerConsideracoesFinais}>
            <div className={style.divContato}>
                <h2 className={style.titleConsideracoesFinais}>Contato</h2>
                <div className={style.divTelefone} onClick={aoClicarNoLinkDetelefone}>
                    <FontAwesomeIcon icon={faSquarePhone} className={style.phoneIcon}/>
                    <p>(11) 4526-2200</p>
                </div>
            </div>
            <div className={style.divLocalizacao}>
                <h2 className={style.titleConsideracoesFinais}>Localização</h2>
                <div className={style.divEndereco}>
                    <p onClick={aoClicarLinkDeLocalizacao}>Mercadão Vila Arens - Rua Prof. João de Campos, 210 - Jardim São Bento, Jundiai-SP</p>
                </div>
            </div>
        </div>
    )
}

export default ConsideracoesFinais;
