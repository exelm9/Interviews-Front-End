import React from 'react';

const FilterButton = (props) => {
	const { name, active } = props;
  return (
  	<button className={ active } value={ name }>{ name }</button>
  );
};

export default FilterButton