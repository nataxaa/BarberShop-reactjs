import styled from "styled-components";


export const Container = styled.div`
    width:auto ;
    height:max-content ;
    height:710px ;
    background-color:#1B1B1E ;
   
    h1{
        color:#FFFBDB ;
        text-align:center ;
        font-size:3.8rem ;
        padding-top:4rem ;
        margin-bottom:4rem ;
    }
    input{
        display:flex ;
        padding:0.7rem ;
        width:20rem ;
        margin-bottom:5px ;
        border-radius:10px ;
        border:none ;  
        outline :none ;
    }
    input.style-mensagem{
        outline:none ;
        padding:0.7rem ;
        width:20rem ;
        height:10rem ;
        margin-bottom:5px ;
        border-radius:10px ;
        border:none ;
        word-wrap: break-word ;
    }
    span.facebook-icon{
        font-size:2rem ;
        position:relative ;
        top:-3rem ;
        right:-10rem ;
        color:#FFFBDB ;
    }
    span.insta-icon{
        font-size:2rem ;
        position:relative ;
        top:-3rem ;
        right:-12rem ;
        color:#FFFBDB ;
    }
    span.youtube-icon{
        font-size:2rem ;
        position:relative ;
        top:-3rem ;
        right:-14rem ;
        color:#FFFBDB ;
    }
    div.information{
        position:relative ;
        color:#FFFBDB;
        right:-60rem ;
        top:-8rem ;
        font-size:1.2rem ;
    }
    div.enviar-mensagem{
        background-color:#7E7E8B ;
        width:fit-content ;
        padding:2rem ;
        border-radius:10px ;
        display:flex ;
        flex-direction:column ;
        button{
            padding:8px ;
            border:none ;
            border-radius:10px ;
            cursor: pointer;
        }
    }
`