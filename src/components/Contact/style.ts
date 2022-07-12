import styled from "styled-components";


export const Container = styled.div`
    width:auto ;
    height:max-content ;
    height:668px ;
    background-color:#1B1B1E ;
   
    h1{
        color:#FFFBDB ;
        text-align:center ;
        font-size:3.8rem ;
        padding-top:3rem ;
        margin-bottom:5rem ;
    }
    input{
        display:flex ;
        padding:0.7rem ;
        width:20rem ;
        margin-bottom:5px ;
        border-radius:10px ;
        border:none ;   
    }
    input.style-mensagem{
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
        top:5rem ;
        right:-10rem ;
        color:#FFFBDB ;
    }
    span.insta-icon{
        font-size:2rem ;
        position:relative ;
        top:5rem ;
        right:-12rem ;
        color:#FFFBDB ;
    }
    span.youtube-icon{
        font-size:2rem ;
        position:relative ;
        top:5rem ;
        right:-14rem ;
        color:#FFFBDB ;
    }
    div.information{
        position:relative ;
        color:#FFFBDB;
        right:-60rem ;
        font-size:1.2rem ;
    }
`