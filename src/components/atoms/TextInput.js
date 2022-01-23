import styled from 'styled-components';
import { COLOR_WHITE } from '../../constants/colors';

export const TextInput = styled.input`
    border: none;
    outline: none;
    color: ${COLOR_WHITE};
    background-color: transparent;
    border-bottom: 1px solid ${COLOR_WHITE};
    padding-top: 10px;
    padding-bottom: 10px;
    &::placeholder{
        color: ${COLOR_WHITE};
    }
`