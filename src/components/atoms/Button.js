import styled from 'styled-components';
import { COLOR_GREEN, COLOR_WHITE } from '../../constants/colors';

export const Button = styled.button`
    cursor: pointer;
    transition: 0.3s;
    background-color: ${({ white }) => white ? COLOR_WHITE : COLOR_GREEN};
    color: ${({ white }) => white ? COLOR_GREEN : COLOR_WHITE};
    border: 2px solid;
    border-color: ${COLOR_GREEN};
    font-size: 18px;
    padding-top: 9px;
    padding-bottom: 10px;
    padding-left: 40px;
    padding-right: 41px;
    border-radius: 5px;
    &:after{
        ${({ white }) => white ? "content: url('/assets/icons/longArrowGreen.svg')" : "content: url('/assets/icons/longArrow.svg')"};
        
        padding-left: 15px;
    }
    &:hover{
        
    }
`