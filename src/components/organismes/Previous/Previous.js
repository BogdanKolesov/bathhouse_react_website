import React from 'react';
import { AppContainer } from '../../atoms';
import { PreviousContainer, PreviousItem, PreviousItemDescription, PreviousItemHeader, PreviousItemIcon } from './Previous.styles';

const Previous = ({ content }) => {
    return (
        <AppContainer>
            <PreviousContainer>
                <h3>Преимущества</h3>
                {
                    content.map((item, index) => (
                        <PreviousItem key={index}>
                            <PreviousItemHeader>
                                <PreviousItemIcon>
                                    <img src={item.icon} alt='' />
                                </PreviousItemIcon>
                                <h4>{item.title}</h4>
                            </PreviousItemHeader>
                            <PreviousItemDescription>
                                {item.description}
                            </PreviousItemDescription>
                        </PreviousItem>
                    ))
                }
            </PreviousContainer>
        </AppContainer>
    );
}

export default Previous;
