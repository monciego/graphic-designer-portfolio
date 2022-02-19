import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

     :root {
         --clr-light: #EDF2F8;
         --clr-light-secondary: #EEEEEE;
         --clr-dark: #0F0E0E;
         --clr-dark-secondary: #191919;
         --clr-white: #FFFFFF;

         --ff-serif: 'Playfair Display', serif;
         --ff-serif-secondary: 'Cinzel', serif;
         --ff-sans-serif: 'Syncopate', sans-serif;
         --ff-sans-serif-secondary: 'Montserrat', sans-serif;
         --ff-sans-serif-tertiary: 'Mulish', sans-serif;
     }
    
    body {
        background: var(--clr-dark);
        color: var(--clr-white);
        font-family: var(--ff-sans-serif-tertiary);
    }

    section {
        max-width: 95%;
        width: 100%;
        margin: 0 auto;

        @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
          padding: 5rem 0 0 0;
        }
    }
`;
