import React from 'react';
import { AppContainer, Button } from '../../../../atoms';
import { CheckboxForm, CheckFormContainer, CheckFormContent } from './CheckForm.styles';

const Checkform = () => {
    return (
        <AppContainer>
            <CheckFormContainer>
                <img src='/assets/images/Home/bath1.png' alt='Баня' />
                <CheckFormContent>
                    <h3>Узнать, свободна ли сауна</h3>
                    <input type='text' placeholder='Ваш телефон' />
                    <input type='text' placeholder='Время посещения сауны' />
                    <input type='text' placeholder='Введите количество часов' />
                    <CheckboxForm>
                        <input type='checkbox' />
                        <span>
                            Согласен на обработку и передачу персональных данных
                            в соответствии с <a href='/'>пользовательским соглашением</a>
                        </span>
                    </CheckboxForm>
                    <Button white>Проверить</Button>
                </CheckFormContent>
            </CheckFormContainer>
        </AppContainer>
    );
}

export default Checkform;
