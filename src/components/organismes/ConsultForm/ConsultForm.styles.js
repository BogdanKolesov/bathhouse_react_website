import styled from 'styled-components';
import { COLOR_GREEN } from '../../../constants/colors';
import { AppContainer } from '../../atoms';

const containerHeight = 260;

export const ConsultFormContainer = styled.section`
    position: relative;
    margin: 0 auto;
    background-color: ${COLOR_GREEN};
    height: ${containerHeight}px;
    margin-top: 200px;
    ${AppContainer}{
        display: flex;
        /* justify-content: space-between; */
        /* align-items: center; */
    }
    img{
        position: absolute;
        bottom: 0;
        width: 20%;
    }
`

export const ConsultFormContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 100%;
`
export const ConsultFormTitle = styled.h4`

`

export const ConsultFormDescription = styled.p`

`