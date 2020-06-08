import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        aria-label='Search Robots'
        className='pa3 ba b--blue bg-light-blue'
        type='search'
        placeholder='Search robots'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
