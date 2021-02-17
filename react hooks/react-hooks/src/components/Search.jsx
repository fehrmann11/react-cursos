import React from 'react'
//rafce

const Search = ({search,searchInput,hadleSearch}) => {
    return (
        <div className="Search">
        <input type="text" value={search} ref={searchInput} onChange={hadleSearch} />
      </div>

    )
}
//rafce

export default Search;
