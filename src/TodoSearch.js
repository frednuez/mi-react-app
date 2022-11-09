import React from 'react';

function TodoSearch({searchValue, setSearchValue}){
    // const [searchValue, setSearchValue] = React.useState('');

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    } 

    return (
        <input 
        className='todoSearch'    
        placeholder='Escribe aquí' 
        onChange={onSearchValueChange} 
        value={searchValue}
    />
    );
}

export {TodoSearch};