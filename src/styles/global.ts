import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle `
:root {
 --background:#f0f2f5;

}
    * { 
    margin:0;
    padding:0;
    box-sizing:border-box;
 }
 html {
  @media (max-width:1080px){
  font-size: 93.75%; 
 } 
 @media (max-width:750px){
 font-size: 87.5%;
 }
 body {
    background:var (--background);
   -webkit-font-smoothing:antialiased
   }

   body, imput, textarea, button {
      font-family:'poppins' sans-serif;
      font-weight:400;
   }

   botton{
   cursor:pointer;
   }
   
   [desabled]{
   opacity:0.6;
   cursor:not allowed;
   }}
`