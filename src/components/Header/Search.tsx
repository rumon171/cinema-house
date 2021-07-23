import React, { useState, useEffect } from 'react';
import {OutlinedInput} from '@material-ui/core';
import './Header.css';

const Search = (props: any) => {

  const [searchedMovie, setSearchedMovie] = useState<string>('');
  
  useEffect(()=>{
    console.log('Current searchedMovie ', searchedMovie);
  }, [searchedMovie]);

  return (
    <>
        <OutlinedInput 
            color="secondary" 
            className="seach-field" 
            type="string" 
            onBlur={({ target: { value } }) => setSearchedMovie(value)} 
            placeholder="Expense cost" 
            value={searchedMovie}
            />
    </>
  );
}

export default Search;
/* 

 onChange={({ target: { value } }) => onChange(value)} 

*/


/*
            <InputItem 
                onChange={setAmount}  
                onBlur={setAmount}  
                title="Amount" 
                type="number" 
                placeholder="Expense cost" 
                value={Amount}
            
            />
*/