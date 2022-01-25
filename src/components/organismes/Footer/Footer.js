import React from 'react';
import { FooterContainer, FooterContent } from './Footer.styles';

const Footer = () => {
    return (
        <FooterContainer width='100%'>
            <FooterContent>
                <p>
                    Сайт разработан по макету, найденному в интернете || <a href='https://www.kolesov.dev/'>kolesov.dev</a>
                </p>
            </FooterContent>
        </FooterContainer>
    );
}

export default Footer;
