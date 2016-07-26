import _ from 'lodash';

export const formatFullName = (user) => {
	let firstName = capitalizeFirstLetter(user.first); 
	let lastName = formatLastName(user.last);
	return `${firstName} ${lastName}`;
}

export const truncateDescription = (description) => {
	console.log(description,'what')
	let trimStr = description.substring(0, 48);
	while(trimStr.charAt(trimStr.length) === " "){
		trimStr.splice(0,-1);
	}
	return trimStr;
}

/* helper funcs */
const capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const formatLastName = (lastName) => {
	return lastName[0].toUpperCase() + ".";
}