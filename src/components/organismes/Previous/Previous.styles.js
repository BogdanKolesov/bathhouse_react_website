import styled from 'styled-components';
import { COLOR_DARK, COLOR_GREEN, COLOR_LITEGRAY } from '../../../constants/colors';

export const PreviousContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 76px;
    
    h3{
        color: ${COLOR_DARK};
        font-size: 24px;
    }
`

export const PreviousItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 30px;
`
export const PreviousItemHeader = styled.div`
    display: flex;
    align-items: center;
    h4{
        font-size: 18px;
        color: ${COLOR_DARK};
    }
`
export const PreviousItemIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: ${COLOR_GREEN};
    border-radius: 5px;
    margin-right: 15px;
`
export const PreviousItemDescription = styled.p`
    font-size: 16px;
    color: ${COLOR_LITEGRAY};
    margin-top: 10px;
`