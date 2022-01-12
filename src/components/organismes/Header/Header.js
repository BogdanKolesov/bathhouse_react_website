import React from 'react';
import { AppContainer, Button } from '../../atoms'
import { headerData } from '../../../data/headerData'
import { HeaderContainer, HeaderInfo, HeaderLink, HeaderLinks, HeaderLogo, HeaderPhone } from './Header.styles';

const Header = () => {
    return (
        <AppContainer>
            <HeaderContainer>
                <HeaderLogo>
                    <img src='' alt='Баня' />
                </HeaderLogo>
                <HeaderLinks>
                    {
                        headerData.map((data, index) => (
                            <HeaderLink key={index} href={data.link}>
                                {data.title}
                            </HeaderLink>
                        ))
                    }
                </HeaderLinks>
                <HeaderInfo>
                    <HeaderPhone>

                    </HeaderPhone>
                    <Button>
                        Забронировать
                    </Button>
                </HeaderInfo>
            </HeaderContainer>
        </AppContainer>

    );
}

export default Header;
