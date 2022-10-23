import React from 'react';
import { Fragment } from 'react'

const SearchBox = ({ searchfield, searchChange}) => {
    return (
    <>
    <input
    className='pa3 ma4 ba b--green bg-lightest-blue'
    type='search' 
    placeholder='Search Cat'
    onChange={searchChange}
    />
    </>
    );
}

export default SearchBox;