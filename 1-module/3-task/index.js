/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
	
	if(!str){
		return '';
	}

	let strSplit = str.split('');
	strSplit[0] = strSplit[0].toUpperCase();
	return strSplit.join('');
}