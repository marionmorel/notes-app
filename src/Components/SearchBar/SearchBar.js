import React from 'react';

import './SearchBar.css'

const SearchBar = ({ handleSearchNote }) => {
    return (
        <div className="SearchBar">
            <i class="fa-solid fa-magnifying-glass fa-sm"></i>
            <input
                name="search"
                type="text"
                placeholder="type to search..." 
                onChange={(event) => handleSearchNote(event.target.value)}
            />
        </div>
    )
}

export default SearchBar;