import { Container } from "./style";
import {FiShoppingCart} from 'react-icons/fi'

interface headerProps{
    onOpenModal:()=>void
}

export function Header({onOpenModal}:headerProps){
    return(
        <div className="header-style">
            <Container>
                <header>

                <h1>BarberShop</h1>
                <ul>
                    <li><a href="#FirstPage">Pagina inicial</a></li>
                    <li><a href="#AboutUs">Quem somos</a></li>
                    <li><a href="#Service">Serviços</a></li>
                    <li><a href="#Products">Produtos</a></li>
                    <li><a href="#Contact">Contato</a></li>
                </ul>

                <button onClick={onOpenModal}><FiShoppingCart/></button>
                </header>
            </Container>
        </div>
    )
}