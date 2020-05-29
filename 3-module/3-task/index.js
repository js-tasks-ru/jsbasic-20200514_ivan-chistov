/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
	return str
	.split(`-`)
	.map( function (word, index){
		if ( index > 0) {
			return upperFitstChar(word);
		}

		return word;
	} ).join('');
}


function upperFitstChar(str = ''){
	let chars = str.split('');
	chars[0] = chars[0].toUpperCase();
	return chars.join('');
}

