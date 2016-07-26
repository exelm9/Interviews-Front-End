import _ from 'lodash';

export const formatFullName = (user) => {
	let fullName = "";
	let firstName = capitalizeFirstLetter(user.first); 
	let lastName = formatLastName(user.last);
	return `${firstName} ${lastName}`;
}

/* helper funcs */
const capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const formatLastName = (lastName) => {
	return lastName[0].toUpperCase() + ".";
}