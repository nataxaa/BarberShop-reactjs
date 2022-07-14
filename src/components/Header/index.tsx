import { Container } from "./style";
import {FiShoppingCart} from 'react-icons/fi'
import { useContext } from "react";
import { CartContext } from "../../Context/cart";

interface headerProps{
    onOpenModal:()=>void
}

export function Header({onOpenModal}:headerProps){

    const {quant}:any = useContext(CartContext)

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

                <button onClick={onOpenModal}> <span>{quant}</span><FiShoppingCart/></button>
                </header>
            </Container>
        </div>
    )
}