import { useState } from "react";
import { products } from "../../Data/data";
import { Container, ListProducts } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";



interface productsProps{
    id: number,
    name:string,
    price:number,
    image:any
}

export function Products(){
    const procut = products


    return(
        <Container>
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
            <button>Adicionar ao Carrinho</button>
            </div>
        </SwiperSlide>
    ))}
                        

</Swiper>
        
        </Container>
    )
}