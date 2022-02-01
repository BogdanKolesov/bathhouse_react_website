import styled from 'styled-components';

export const AppContainer = styled.div`
    width: ${({ width }) => width ? width : '67.1%'};
    margin: 0 auto;
    @media(max-width: 1200px){
        width: ${({ widthMobile }) => widthMobile ? widthMobile : '95%'};
        }
`