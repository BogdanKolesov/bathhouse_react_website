import React from 'react';
import { CheckGroupContainer } from './CheckGroup.styles';

const Checkgroup = () => {
    return (
        <CheckGroupContainer>
            <input type='checkbox' />
            <span>
                Согласен на обработку и передачу персональных данных
                в соответствии с <a href='/'>пользовательским соглашением</a>
            </span>
        </CheckGroupContainer>
    );
}

export default Checkgroup;
