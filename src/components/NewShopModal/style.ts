import styled from "styled-components";

export const Container = styled.div`

text-align:center ;
align-items:center ;

h1{
    margin-bottom:1rem ;
}
div.list-products{
    display:grid ;
   flex-direction:row ;
}
div.product-item{
    width:35rem ;
    height:6rem ;
    background-color:#D7B377 ;
    align-items:center ;
    position: relative;
    margin-bottom:0.5rem ;
    display:flex ;
    text-align:center;
    display:grid ;
    grid-template-columns:1fr 1fr 1fr 1fr ;
    border-radius:10px ;
}
img{
    width:5rem ;
    border-radius:10px ;
}
p{
    text-align:right ;
    padding-right:4rem ;
    padding-top:1rem ;
}
.icon{
    align-items:center ;
    padding-right:0.3rem ;
    padding-left:0.3rem ;
   
}
span.quantidade{
    
}
button.icon{
    border:none ;
    background:none ;
    font-size:1rem ;
    margin-left:0.2rem ;
    margin-right:0.2rem ;
    align-items:center ;
    cursor: pointer;
}

`