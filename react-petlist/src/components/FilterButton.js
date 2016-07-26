import React from 'react';

const FilterButton = (props) => {
	const { name } = props;
  return (
  	<button value={ name }>{ name }</button>
  );
};

export default FilterButton