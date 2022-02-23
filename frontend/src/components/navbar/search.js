import React from 'react'
import { useHistory } from 'react-router-dom';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const history = useHistory();
    const onSubmit = (e) => {
        history.push(`?s=${searchQuery}`);
        e.preventDefault();
    };

    return (
        <form 
            action="/" 
            method="get" 
            className="d-flex"
            autoComplete="off"
            onSubmit={onSubmit}
        >
        <label htmlFor="header-search">
            <span className="visually-hidden">Search places n' samples</span>
        </label>
        <input
            value={searchQuery}
            onInput={(e) => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search places n' samples"
            name="s" 
        />
        {/* <button  type="submit">Search</button> */}
        <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    )
    
}

export default SearchBar;