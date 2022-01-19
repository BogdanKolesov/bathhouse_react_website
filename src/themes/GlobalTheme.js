import { createGlobalStyle } from 'styled-components';
import { COLOR_WHITE } from '../constants/colors';


export const GlobalTheme = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', 'Source Sans Pro', sans-serif;
        a{
            text-decoration: none;
            cursor: pointer;
        }
        a,p,span,h1,h2,h3,h4,h5,input{
        /* font-size: 16px; */
        color: ${COLOR_WHITE};
        }
        h2{
            font-size: 28px;
        }
        li{
            list-style: none;
        }
    }
`
