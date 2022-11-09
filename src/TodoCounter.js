import React from 'react';

function TodoCounter({total, completed}){
    return (
        <h2>Completado {completed} de {total}</h2>
    );
}

export {TodoCounter};