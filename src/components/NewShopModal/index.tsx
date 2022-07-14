
import Modal from 'react-modal'
import { Container } from './style';


Modal.setAppElement('#root');

interface modalProps{
    isOpen:boolean;
    onRequestClose:()=>void;
}
export function ShopCartModal({isOpen, onRequestClose}:modalProps){
    return(
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <Container>
                <h1>Produtos</h1>
            </Container>
        </Modal>
    )
}