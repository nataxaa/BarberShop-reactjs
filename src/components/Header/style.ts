import styled from "styled-components";

export const Container = styled.header`
    
    width:1366px ;
    background-color: #3A2618 ;
    position:fixed ;
    align-items:center ;
    padding:10px ;
    height:2.2rem ;
    z-index:1;
    
    span{
        background-color:red ;
        font-size:0.7rem ;
        border-radius:14px ;
        padding:1px 2.6px ;
        position: relative;
        top:-1rem ;
        right:-1.6rem ;
    }
    header{
        align-items:center ;
        display:flex ;
    }

    ul{
        display:flex ;
        position:relative ;
        right:-12rem ;
    }
    li{
        margin-right:1rem ;
        list-style:none ;
        a{
            text-decoration:none ;
            outline:none ;
            color:#FFFBDB ;
        }
    }
    h1{
        color:#FFFBDB ;
    }

    button{
        background:none ;
        color:#FFFBDB ;
        font-size:1.3rem ;
        border:none ;
        padding-top:0.3rem ;
        cursor: pointer;
    }
    

`