import React from 'react';
import { AppContainer, Button, TextInput } from '../../atoms';
import CheckGroup from '../../molecules/CheckGroup';
import { ConsultFormContainer, ConsultFormContent, ConsultFormDescription, ConsultFormTitle } from './ConsultForm.styles';

const ConsultForm = () => {
    return (
        <AppContainer width='100%'>
            <ConsultFormContainer>
                <AppContainer>
                    <img src='/assets/images/Home/woman.png' alt='Happy Woman' />
                    <ConsultFormContent>
                        <ConsultFormTitle>
                            Нужна консультация?
                        </ConsultFormTitle>
                        <ConsultFormDescription>
                            закажите обратный звонок, мы вам перезвоним
                        </ConsultFormDescription>
                        <form>
                            <TextInput type='text' placeholder='Ваше имя' />
                            <TextInput type='text' placeholder='Ваш телефон' />
                            <CheckGroup />
                            <Button white>Перезвоните мне</Button>
                        </form>
                    </ConsultFormContent>
                </AppContainer>
            </ConsultFormContainer>
        </AppContainer>
    );
}

export default ConsultForm;
