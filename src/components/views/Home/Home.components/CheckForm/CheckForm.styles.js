import styled from 'styled-components';
import { COLOR_GRAY, COLOR_GREEN, COLOR_LITEGRAY, COLOR_WHITE } from '../../../../../constants/colors';

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
            margin-top: 50px;
            align-items: center;
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
            color: ${COLOR_LITEGRAY};
        }
        @media(max-width: 1200px){
            width: 95%;
            margin-top: 20px;
        }
    }
    @media(max-width: 1200px){
            width: 100%;
            padding-top: 20px;
            padding-bottom: 20px;
            padding-left: 15px;
            padding-right: 15px;
            align-items: center;
            background-color: ${COLOR_WHITE};
            
            h3{ 
                color: ${COLOR_GREEN};
            }
            input{
                color: ${COLOR_GRAY};
                border-color: ${COLOR_GRAY};
            }
        }
    
`

export const CheckboxForm = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    input{
        margin-right: 10px;
        width: 30px;
        height: 30px;
    }
    span{
        font-size: 14px;
        a{
            font-size: 14px;
            font-weight: bold;
            text-decoration: underline;
        }
    }
    @media(max-width: 1200px){
        margin-top: 30px;
        margin-bottom: 30px;
        span{
            color: ${COLOR_GRAY};
            a{
                color: ${COLOR_GRAY};
            }
        }
    }
`