import styled from 'styled-components';
import { COLOR_GREEN } from '../../../constants/colors';
import { AppContainer } from '../../atoms'

export const FooterContainer = styled(AppContainer)`
    height: 80px;
    background-color: ${COLOR_GREEN};
`
export const FooterContent = styled.footer`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        font-size: 20px;
        a{
            font-size: 22px;
            text-decoration: underline;
        }
    }
`