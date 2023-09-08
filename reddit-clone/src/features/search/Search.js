import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm, fetchSearchResults, selectSearchTerm } from './searchSlice';
import './search.css';

const Search = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);

    const handleSearch = () => {
        dispatch(fetchSearchResults(searchTerm));
    };

    return (
        <div>
            <form id="search" onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={({target}) => dispatch(setSearchTerm(target.value))}  
                />
            </form>
        </div>
    )
};

export default Search;