import { useState, useContext } from "react";
import { products } from "../../Data/data";
import { Container} from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { CartContext } from "../../Context/cart";



interface productsProps{
    id: number,
    name:string,
    price:number,
    image:any
}

export function Products(){
    const procut = products
    const {addProduct, productsCart}:any = useContext(CartContext)

    console.log(productsCart)
    return(

        <Container id="Products">

            <h1>Produtos</h1>       
            <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            >

        {procut.map((products:productsProps)=>(
        <SwiperSlide>
            <div className="style-swiper">
            <img src={products.image} alt="imagem de um produto" />
            <p>{products.name}</p>
            <span>R$ {products.price},00</span>
            <button onClick={()=>addProduct(products.id, products.name, products.price, products.image)}>Adicionar ao Carrinho</button>
            </div>
        </SwiperSlide>
    ))}
                        

</Swiper>
        
        </Container>
    )
}