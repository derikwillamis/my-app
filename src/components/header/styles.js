import  styled from "styled-components";

export const Container = styled.header `
 background: var

`;
export const Content = styled.div`
 max-width: 1120px;
 margin: 0 auto;

 padding:0 1rem 10rem ;
 display:flex ;
 align-items:center ;
 justify-content:space-between ;

button{
    font-size:1rem ;
    color: #fff ;
    background:red ;
    border:0 ;
    padding:0 1rem ;
    border-radius:1rem ;
    height: 1.25rem ;
    
    transition:0,2 ;

    &:hover{
        filter:brightness(0.25px) ;
    }
}
`
