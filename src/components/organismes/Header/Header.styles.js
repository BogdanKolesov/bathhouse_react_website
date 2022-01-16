import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLOR_ORANGE } from '../../../constants/colors';
import { Button } from '../../atoms';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-top: 28px;
    height: 86px;
`
export const HeaderLogo = styled.div`
    display: flex;
    align-items: flex-end;
    img{
        height: 100%;
    }
    p{
        display: flex;
        flex-direction: column;
        margin-left: 17px;
        height: 100%;
        span{
            font-size: 25px;
            font-weight: 400;
        }
        span:last-child{
            font-size: 18px;
        }
    }

`
export const HeaderLinks = styled.div`
    display: flex;
`
export const HeaderLink = styled.a`
    margin-right: 64px;
        &:nth-last-child(1) {
            margin-right: 0;
        }

`

export const HeaderInfo = styled.div`

`

export const HeaderPhone = styled.div`

`
export const HeaderButton = styled(Button)`
    background-color: ${COLOR_ORANGE};
    border-color: ${COLOR_ORANGE};
`
