import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDogs } from '../redux/actions';

import { FaSearch } from 'react-icons/fa';

function SearchBar({setCurrentPage}) {
    const dispatch = useDispatch()
    const [name, setName] = useState("");

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
    }
     function handleSubmit(e){
        e.preventDefault();
        dispatch(getDogs(name));
        setCurrentPage(1);
     }
    return (
        <> 
            <input
                className='bg-teal-500 placeholder-black text-center'
                type='search'
                placeholder=' Search Dog'
                onChange={ handleInputChange }
                value={name}
            /> <button className='' type='search' onClick={handleSubmit}><FaSearch/></button>
        </>
    )
}

export default SearchBar