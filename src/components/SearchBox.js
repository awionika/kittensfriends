import React from 'react';

 
const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa1'>
            <input className='pa3 br3 ba b--green bg-lightest-blue' 
                   type='search'
                   placeholder='Search kittens'
                   onChange={searchChange}  

            /> 
        </div>
    );
}



export default SearchBox;