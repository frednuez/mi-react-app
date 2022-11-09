import React from 'react';

function TodoItem(props){
    const onComplete = () => {
        alert('completaste el todo ' + props.text);
    }

    const onDelete = () => {
        alert('eliminaste el todo ' + props.text);
    }

    return (
        <ul>
            <li className="TodoItem">
                <span className={`Icon`} onClick={onComplete}>@</span>
                <span>{props.text}</span>
                <span onClick={onDelete}>X</span>
            </li>
        </ul>  
    );
}

export {TodoItem};