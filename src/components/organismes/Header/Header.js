import React, { useState, useEffect } from 'react';
import { AppContainer } from '../../atoms'
import { headerData } from '../../../data/headerData'
import { HeaderContainer, HeaderInfo, HeaderLink, HeaderLinks, HeaderLogo, HeaderPhone, HeaderButton, HeaderHamburger, HeaderHamburgerLines, HeaderMobileMenu } from './Header.styles';
import { ICON_LOGO } from '../../../constants/icons';

const Header = () => {
    const [activeMobile, setActiveMobile] = useState(false);

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
                <HeaderHamburger activeMobile={activeMobile} onClick={() => setActiveMobile(!activeMobile)}>
                    <HeaderHamburgerLines activeMobile={activeMobile} />

                </HeaderHamburger>
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
                <HeaderMobileMenu activeMobile={activeMobile} >

                </HeaderMobileMenu>
            </HeaderContainer>
        </AppContainer>

    );
}

export default Header;
