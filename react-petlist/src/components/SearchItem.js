import React from 'react';

const SearchItem = (props) => {
  const {title, fullName, description, petName} = props;
	
  return (
    <div className="userCard">
    	<div>{ fullName }</div>
    	<div>{ title }</div>
    	<div>{ petName }</div>
    	<div>{ description }</div>
		</div>
  );
};

export default SearchItem;