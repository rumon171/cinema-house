import React from 'react';
import {OutlinedInput} from '@material-ui/core';
import './Header.css';

const Search = (props: any) => {
  return (
    <>
        <OutlinedInput 
            color="secondary" 
            className="seach-field" 
            defaultValue="Search"/>
    </>
  );
}

export default Search;