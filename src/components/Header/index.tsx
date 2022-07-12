import { Container } from "./style";


export function Header(){
    return(
        <div className="header-style">
            <Container>
                <header>

                <h1>BarberShop</h1>
                <ul>
                    <li>Pagina inicial</li>
                    <li>Quem somos</li>
                    <li>Serviços</li>
                    <li>Produtos</li>
                    <li>Contato</li>
                </ul>
                </header>
            </Container>
        </div>
    )
}