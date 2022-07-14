import styled from "styled-components";


export const Container = styled.div`

    width:auto ;
    height:max-content ;
    height:645px ;
    background-color:#FFFBDB ;
    
    h1{
        text-align:center ;
        padding-top:4rem ;
        font-size:4rem ;
    }
    button{
        font-size:1.2rem ;
        padding:20px ;
        display:flex ;
        margin-top:2rem ;
        border:none ;
        color:white ;
        background-color:#0A0A0A ;
        border-radius:10px ;
        cursor: pointer;
        :hover{
            opacity:0.88 ;
        }

    }
`
export const ListServices = styled.div`
    display: flex;
    margin-top :3rem;
    font-size: 2rem;
    
    ul {
        list-style:none ;
    }
    
    li {
        margin-bottom:1rem ;
        display: flex;
        justify-content: space-between;
        width: 60rem;
        
        p {
            margin: 0;
            margin-left: 7% ;
        }

        span {
            margin: 0;
            margin-right: 7%;
        }
    }
    
   

`
export const Divider = styled.div`
width:100% ;

background-color:black ;
height:1px ;
margin-bottom:1rem ;

`