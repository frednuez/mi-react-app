import React from 'react';

function CreateTodoButton(){
const onClickButton = (msj) => {
    alert(msj);
}

    return (
        <button onClick={() => onClickButton('clic realizado!')}>+</button>
    );
}

export {CreateTodoButton};