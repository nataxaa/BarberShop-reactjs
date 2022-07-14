import { useContext, useState } from 'react';
import Modal from 'react-modal'
import { CartContext } from '../../Context/cart';
import { Container } from './style';
import {FiPlus, FiMinus} from 'react-icons/fi'



Modal.setAppElement('#root');

interface modalProps{
    isOpen:boolean;
    onRequestClose:()=>void;
}

interface listProps{
    id:number,
    name:string,
    price:number,
    image:any,
    qtd:number
}


export function ShopCartModal({isOpen, onRequestClose}:modalProps){
    
    const {addProduct, productsCart, total, removeProductToCart}:any = useContext(CartContext)
    const [flag, setFlag] = useState<boolean>()
    
    function Products0(){
        if(productsCart>0){
          setFlag(false)
        }else{
           setFlag(true)
        }
    }


    return(
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <Container>
                <h1>Produtos</h1>
                <div className='list-products'>
                    {flag && 
                        <h1>Nenhum produto Adicionado.</h1>
                    }
                    {productsCart.map((products:listProps)=>(
                        <div className='product-item'>
                            <img src={products.image} alt="imagem de produto" />
                            <span>{products.name}</span>
                            <span>R$ {products.price},00</span>
                            <span className='quantidade'>
                                <button  onClick={()=>removeProductToCart(products.id, products.price)} className='icon'><FiMinus/></button>
                                {products.qtd}
                                <button  onClick={()=>addProduct(products.id, products.name, products.price, products.image)} className='icon'><FiPlus/></button>
                            </span>
                        </div>
                    ))}
                </div>
                <p>Valor a Pagar: R$ {total},00</p> 
            </Container>
        </Modal>
    )
}