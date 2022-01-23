import styled from 'styled-components';
import { COLOR_DARK, COLOR_GREEN, COLOR_LITEGRAY } from '../../../constants/colors';
import { Button } from '../../atoms';

export const ActionsContainer = styled.section`
    margin-top: 80px;
    width: 100%;
    display: flex;
    flex-direction: column;

    h3{
        font-size: 60px;
        color: ${COLOR_DARK};
    }
`

export const ActionsSlider = styled.div`

`

export const ActionsSlide = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 35px;
    border: 1px solid #70873A;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.04);
    height: 300px;
    width: 90%;
    img{
        width: 50%;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 28% 100%);
    }
`

export const ActionsSliderContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    margin-left: 40px;
    /* margin-top: 59px; */

    h4{
        font-size: 60px;
        color: ${COLOR_GREEN};
    }

    p{
        font-size: 16px;
        color: ${COLOR_LITEGRAY};
        margin-top: 10px;
    }

    ${Button}{
        margin-top: 30px;
        padding: 10px 114px;
    }
`