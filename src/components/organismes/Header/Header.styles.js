import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

