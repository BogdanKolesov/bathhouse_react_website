import styled from 'styled-components';
import { COLOR_GREEN, COLOR_WHITE } from '../../../../../constants/colors';

export const CheckFormContainer = styled.div`
    display: flex;
    margin-top: 100px;
    background-color: ${COLOR_GREEN};
    img{
        width: 50%;
        @media(max-width: 1200px){
            display: none;
        }
    }
    @media(max-width: 1200px){
            /* margin-top: 50px; */
        }
`

export const CheckFormContent = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    padding-bottom: 65px;
    padding-left: 108px;
    padding-right: 108px;
    justify-content: space-between;
    input{
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
    }
    @media(max-width: 1200px){
            width: 100%;
            padding-top: 20px;
            padding-bottom: 20px;
            padding-left: 15px;
            padding-right: 15px;
            /* background-color: ${COLOR_WHITE}; */
        }
`

export const CheckboxForm = styled.div`
    display: flex;
    width: 100%;

    input{
        margin-right: 10px;
    }
    
    span{
        font-size: 14px;
        a{
            font-size: 14px;
            font-weight: bold;
            text-decoration: underline;
        }
    }

`