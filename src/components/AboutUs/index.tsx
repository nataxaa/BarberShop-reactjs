import { Container } from "./style";
import images from '../../images/historia.jpg'

export function AboutUs(){
    return(
        <Container>
            <h1>Nossa <span>História</span></h1>
            <div className="style-second-page">
                <img src={images} alt="imagem de uma barbearia" />
                <p className="text-second-page">
                    Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto.
                    É fácil! Basta clicar em "Editar Texto" ou clicar duas vezes sobre mim e 
                    você poderá adicionar o seu próprio conteúdo e trocar fontes. Sinta-se à 
                    vontade para arrastar e soltar em qualquer lugar em sua página. Sou um ótimo 
                    lugar para você contar sua história e permitir que seus clientes saibam
                    um pouco mais sobre você. 

                    Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto.
                    É fácil! Basta clicar em "Editar Texto" ou clicar duas vezes sobre mim e 
                    você poderá adicionar o seu próprio conteúdo e trocar fontes. Sinta-se à 
                    vontade para arrastar e soltar em qualquer lugar em sua página. Sou um ótimo 
                    lugar para você contar sua história e permitir que seus clientes saibam
                    um pouco mais sobre você.
                </p>
                
            </div>
        </Container>
    )
}