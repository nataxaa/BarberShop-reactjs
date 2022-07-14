import styled from "styled-components";

export const Container = styled.div`

.swiper {
  margin-top:4rem ;
  width: 80%;
  height: 50%;
  z-index:0 ;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  position:initial ;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 65%;
  height: 65%;
  object-fit: cover;
  margin-bottom:1rem ;
}
div.style-swiper{
    display:flex ;
    flex-direction:column ;
    button{
        padding:8px ;
        border:none ;
        background-color:#FFBF69 ;
        border-radius:10px ;
        margin-top:10px ;
        cursor: pointer;
        :hover{
            opacity:0.9 ;
        }
    }
}

    width:auto ;
    height:max-content ;
    height:668px ;
    background-color:#FFBF69 ;
    h1{
        text-align:center ;
        font-size:3.5rem ;
        padding-top:4rem ;
    }
 

` 
