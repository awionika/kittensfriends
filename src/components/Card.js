import React from 'react';

const Card = ({name, email, id}) => {
    
    return (
        <div className='tc bg-lightest-blue dib br3 pa3 ma3 grow bw2 shadow-5'>
         
        <img alt='robots' src={`https://robohash.org/set_set4/${id}?200*200`}/>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
        </div>

    );
}
export default Card;