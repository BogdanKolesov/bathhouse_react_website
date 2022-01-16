import React from 'react';
import { AppContainer } from '../../atoms'
import { headerData } from '../../../data/headerData'
import { HeaderContainer, HeaderInfo, HeaderLink, HeaderLinks, HeaderLogo, HeaderPhone, HeaderButton } from './Header.styles';
import { ICON_LOGO } from '../../../constants/icons';

const Header = () => {
    return (
        <AppContainer>
            <HeaderContainer>
                <HeaderLogo>
                    <img src={ICON_LOGO} alt='Баня' />
                    <p>
                        <span>Баня "Берёзка"</span>
                        <span>в Санкт-Петербурге</span>
                    </p>
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
                    <HeaderButton>
                        Забронировать
                    </HeaderButton>
                </HeaderInfo>
            </HeaderContainer>
        </AppContainer>

    );
}

export default Header;
