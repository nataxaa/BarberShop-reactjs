import { Container, Divider, ListServices } from "./style";



export function Services(){
    return(
        <Container>
            <h1>Serviços</h1>
            <ListServices>
                <ul>
                    <li>
                        <p>Cabelo Diferenciado</p>
                        <span>R$ 25.00</span>
                    </li>
                    <Divider/>
                    <li><p>Cabelo Normal</p> <span>R$ 20.00</span></li>
                    <Divider/>
                    <li> <p>Cabelo e Barba</p><span>R$ 30.00</span></li>
                    <Divider/>
                    <li> <p>Apenas Barba</p><span>R$ 15.00</span></li>
                    <Divider/>
                </ul>
            </ListServices>
                <button>Marcar Horário</button>
        </Container>
    )
}