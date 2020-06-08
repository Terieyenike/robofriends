import React from 'react';

const Card = ({ id, email, name }) => {
  return (
    <div className='pointer tc bg-light-blue dib br4 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?size=200x200`} alt='robots' className="w-100" />
      <div className='details'>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
