import styled from 'styled-components';
import { COLOR_GREEN } from '../../../constants/colors';
import { AppContainer, TextInput } from '../../atoms';
import CheckGroup from '../../molecules/CheckGroup';

const containerHeight = 260;

export const ConsultFormContainer = styled.section`
    position: relative;
    margin: 0 auto;
    background-color: ${COLOR_GREEN};
    height: ${containerHeight}px;
    margin-top: 200px;
    ${AppContainer}{
        display: flex;
        justify-content: space-between; 
        align-items: center;
        height: 100%;
    }
    img{
        height: 100%;
        margin-right: 50px;
    }
`

export const ConsultFormContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: auto;
    justify-content: center;
    form{
        ${TextInput}{
            margin-right: 50px;
            width: 40%;
        }
        ${CheckGroup}{
            margin-top: 30px;
            width: 50%;
        }
    }
`
export const ConsultFormTitle = styled.h4`
    margin-bottom: 5px;
`

export const ConsultFormDescription = styled.p`
    margin-bottom: 30px;
`