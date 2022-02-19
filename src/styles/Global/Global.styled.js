import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

     :root {
         --clr-light: #EDF2F8;
         --clr-dark: #0f0f0f;
         --clr-white: #FFFFFF;

         --clr-primary: #0045FA; // violet
         --clr-secondar: #FFA63D; //yellow
         

         --ff-serif: 'Playfair Display', serif;
         --ff-serif-secondary: 'Cinzel', serif;
         --ff-sans-serif: 'Mulish', sans-serif;
         --ff-sans-serif-secondary: 'Montserrat', sans-serif;
     }
    
    body {
        background: var(--clr-dark);
        color: var(--clr-white);
        font-family: var(--ff-sans-serif);
    }

  
`;
