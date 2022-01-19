import styled from 'styled-components';
import { COLOR_GRAY, COLOR_LITEGRAY } from '../../../../../constants/colors';

export const AboutContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 100px;
    width: 100%;
    img{
        width: 50%;
        height: 100%;
    }
`

export const AboutContent = styled.div`
    width: 50%;
    h2{
        color: ${COLOR_LITEGRAY};
        font-size: 60px;
        margin-bottom: 35px;
    }
    p{
        color: ${COLOR_GRAY};
        font-size: 16px;
    }
`