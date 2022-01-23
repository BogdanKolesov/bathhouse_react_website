import React from 'react';
import { AppContainer, Button } from '../../atoms';
import { ActionsContainer, ActionsSlide, ActionsSlider, ActionsSliderContent } from './Actions.styles';

const Actions = ({ content }) => {
    return (
        <AppContainer>
            <ActionsContainer>
                <h3>
                    Актуальные скидки и акции
                </h3>
                <ActionsSlider>
                    {
                        content.map((data, index) => (
                            <ActionsSlide key={index}>
                                <ActionsSliderContent>
                                    <h4>
                                        {data.type}
                                    </h4>
                                    <p>
                                        {data.time}
                                    </p>
                                    <Button href={data.button.link}>
                                        {data.button.text}
                                    </Button>
                                </ActionsSliderContent>
                                <img src={data.image} alt='' />
                            </ActionsSlide>
                        ))
                    }
                </ActionsSlider>
            </ActionsContainer>
        </AppContainer>
    );
}

export default Actions;
