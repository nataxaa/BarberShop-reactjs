import { Container } from "./style";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";


export function Contact(){
    return(
        <Container>
            <h1>Contato</h1>
            <input type="text"
            placeholder="Digite seu nome.."
            />
            <input type="text"
            placeholder="Digite seu email.."
            />
            <input type="text"
            className="style-mensagem"
            placeholder="Digite sua mensagem.."
            />
            <span className="facebook-icon"><FiFacebook/></span>
            <span className="insta-icon"><FiInstagram/></span>
            <span className="youtube-icon"><FiYoutube/></span>
            <div className="information">
                <p>Rua Contorno Oeste, 456</p>
                <p>Fortaleza-CE</p>
                <p>Horario de Atendimento:</p>
                <p>Segunda a sexta-feira das 08h às 16h</p>
                <p>Sábado e domingo das 12h às 20h</p>
            </div>
        </Container>
    )
}