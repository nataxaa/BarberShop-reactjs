import styled from "styled-components";

export const Container = styled.header`
    
    width:100% ;
    background-color: #3A2618 ;
    position:fixed ;
    align-items:center ;
    padding:10px ;
    height:2.5rem ;
    
    

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