/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str = '') {
  	//console.log( str.replace(/ /g, ',' )
    //.split(',')
    //.filter( str => str !== '' && !isNaN(+str) )
    //.map( str => +str) );
  
    const max = getMaxOfArray( getArrayWithNumbersOfString(str) );
    const min = getMinOfArray( getArrayWithNumbersOfString(str) );

    return {
      min: min,
      max: max
    }
}

function getArrayWithNumbersOfString (str) {
	return str.replace(/ /g, ',' )
    .split(',')
    .filter( str => str !== '' && !isNaN(+str) )
    .map( str => +str)
}

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}

let str = '12 fl js2 23l l jdsj j2 j , s,df ,f ,123, ,';
console.log( getMinMax( str ) );