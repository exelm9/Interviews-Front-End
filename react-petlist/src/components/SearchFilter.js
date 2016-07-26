import React from 'react';

const SearchFilter = (props) => {
	const {filterClick} = props;
  return (
    <div className="searchFilter" onClick={filterClick}>
    	{/* refactor to components */}
    	<button value="boarding">Boarding</button>
    	<button value="sitting">Sitting</button>
    </div>
  );
};

export default SearchFilter